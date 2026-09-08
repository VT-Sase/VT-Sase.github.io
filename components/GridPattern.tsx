"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./GridPattern.module.css";

type Cell = { id: number; column: number; row: number; delay: number };
type Grid = { columns: number; rows: number; cells: Cell[] };

function placeCell(
  id: number,
  columns: number,
  rows: number,
  repeatDelay: number
): Cell {
  return {
    id,
    column: Math.floor(Math.random() * columns),
    row: Math.floor(Math.random() * rows),
    delay: Math.random() * repeatDelay,
  };
}

type Props = {
  /** Cell size, in pixels. */
  width?: number;
  height?: number;
  /** Pattern offset, so the grid's own stroke sits on the cell edge. */
  x?: number;
  y?: number;
  strokeDasharray?: number | string;
  /** How many cells are lit at any one time. */
  numSquares?: number;
  /** Peak opacity a lit cell reaches before fading back out. */
  maxOpacity?: number;
  /** Seconds for one cell to fade up and back down. */
  duration?: number;
  /** Longest random wait before a cell lights up again, in seconds. */
  repeatDelay?: number;
  className?: string;
};

/**
 * A ruled grid drawn as an SVG <pattern>, with a handful of cells lighting up
 * and fading out at random positions across it. Decorative only — hidden from
 * assistive technology, and the caller positions it, usually behind a section.
 */
export default function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 32,
  maxOpacity = 0.65,
  duration = 4,
  repeatDelay = 2.5,
  className,
}: Props) {
  // useId's value contains colons, which cannot appear in a url(#…) reference.
  const patternId = `grid-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const svgRef = useRef<SVGSVGElement>(null);
  const [grid, setGrid] = useState<Grid | null>(null);

  // The grid is laid out from the element's measured box, so the cells are
  // seeded from the ResizeObserver callback rather than from an effect body:
  // this is state arriving from an external system, not a render cascade.
  // Randomising here rather than during render is also what keeps the server
  // and client markup identical.
  useEffect(() => {
    const element = svgRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const box = entry.contentRect;
      const columns = Math.floor(box.width / width);
      const rows = Math.floor(box.height / height);
      if (columns < 1 || rows < 1) return;

      setGrid((current) => {
        if (current && current.columns === columns && current.rows === rows) {
          return current;
        }

        return {
          columns,
          rows,
          cells: Array.from({ length: numSquares }, (_, index) =>
            placeCell(index, columns, rows, repeatDelay)
          ),
        };
      });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [width, height, numSquares, repeatDelay]);

  // A cell that has finished fading out moves somewhere else and starts over.
  // Its React key includes its position, so moving it remounts the rect and
  // the animation replays from the top — no timers to keep in sync.
  //
  // At a few hundred cells the animationend events arrive faster than one per
  // frame, so they are collected and flushed once per frame instead: one pass
  // over the cell list per paint, however many finished in between.
  const pending = useRef<Set<number>>(new Set());
  const frame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    []
  );

  const relocate = useCallback(
    (id: number) => {
      pending.current.add(id);
      if (frame.current !== null) return;

      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const moving = pending.current;
        pending.current = new Set();

        setGrid((current) =>
          current
            ? {
                ...current,
                cells: current.cells.map((cell) =>
                  moving.has(cell.id)
                    ? placeCell(cell.id, current.columns, current.rows, repeatDelay)
                    : cell
                ),
              }
            : current
        );
      });
    },
    [repeatDelay]
  );

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={`${styles.pattern} ${className ?? ""}`.trim()}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />

      <svg x={x} y={y} className={styles.squares}>
        {(grid?.cells ?? []).map((cell) => (
          <rect
            key={`${cell.id}-${cell.column}-${cell.row}`}
            className={styles.square}
            style={
              {
                animationDuration: `${duration}s`,
                animationDelay: `${cell.delay}s`,
                "--max-opacity": maxOpacity,
              } as CSSProperties
            }
            onAnimationEnd={() => relocate(cell.id)}
            strokeWidth={0}
            width={width - 1}
            height={height - 1}
            x={cell.column * width + 1}
            y={cell.row * height + 1}
          />
        ))}
      </svg>
    </svg>
  );
}

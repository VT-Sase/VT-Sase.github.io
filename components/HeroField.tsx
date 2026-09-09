"use client";

import { useEffect, useRef } from "react";

import styles from "./HeroField.module.css";

/**
 * The hero's backdrop: a receding grid of squares that swells under the
 * pointer and breathes on its own.
 *
 * It is a three-dimensional reading of the flat grid pattern the rest of the
 * page already uses, rather than a stock particle field bolted on — the motif
 * carries through instead of arriving from nowhere.
 *
 * three.js is imported inside the effect, so it never lands in the first-load
 * bundle, and the whole thing is skipped for reduced motion and for anything
 * without WebGL. The hero is styled to stand up on its own in those cases.
 */

const COLUMNS = 148;
const ROWS = 86;
const SPACING = 6;

function cssColor(name: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

export default function HeroField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let teardown: (() => void) | undefined;

    void (async () => {
      let THREE: typeof import("three");
      try {
        THREE = await import("three");
      } catch {
        return; // No three, no field — the CSS hero still reads.
      }
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
      } catch {
        return; // No WebGL context available.
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(host.clientWidth, host.clientHeight, false);
      renderer.domElement.className = styles.canvas;
      host.append(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        52,
        host.clientWidth / Math.max(host.clientHeight, 1),
        1,
        3000
      );
      camera.position.set(0, 96, 268);
      camera.lookAt(0, -18, 0);

      // A flat lattice of points, laid down and tilted away from the camera so
      // the far rows compress into the horizon.
      const count = COLUMNS * ROWS;
      const positions = new Float32Array(count * 3);
      let i = 0;
      for (let row = 0; row < ROWS; row += 1) {
        for (let column = 0; column < COLUMNS; column += 1) {
          positions[i] = (column - COLUMNS / 2) * SPACING;
          positions[i + 1] = (row - ROWS / 2) * SPACING;
          positions[i + 2] = 0;
          i += 3;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const uniforms = {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uSize: { value: 2.6 },
        uNear: { value: new THREE.Color(cssColor("--green", "#8fc53f")) },
        uFar: { value: new THREE.Color(cssColor("--cyan", "#00c4ff")) },
        uOpacity: { value: 0.55 },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: `
          uniform float uTime;
          uniform vec2 uPointer;
          uniform float uSize;
          varying float vLift;

          void main() {
            vec3 pos = position;

            float wave =
              sin(pos.x * 0.021 + uTime * 0.62) *
              cos(pos.y * 0.026 - uTime * 0.44);

            float d = distance(pos.xy, uPointer);
            float bulge = exp(-d * d * 0.00016);

            float lift = wave * 5.5 + bulge * 34.0;
            pos.z += lift;

            vLift = clamp((lift + 6.0) / 40.0, 0.0, 1.0);

            vec4 mv = modelViewMatrix * vec4(pos, 1.0);
            // Clamped: a point that crosses behind the camera would otherwise
            // divide by a near-zero depth and blow up to fill the screen.
            float depth = max(-mv.z, 1.0);
            gl_PointSize = clamp(
              uSize * (1.0 + vLift * 2.4) * (360.0 / depth),
              0.0,
              22.0
            );
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          uniform vec3 uNear;
          uniform vec3 uFar;
          uniform float uOpacity;
          varying float vLift;

          void main() {
            // Square points, to echo the flat grid pattern elsewhere.
            vec2 corner = abs(gl_PointCoord - 0.5);
            float edge = max(corner.x, corner.y);
            float alpha = 1.0 - smoothstep(0.40, 0.5, edge);
            if (alpha <= 0.001) discard;

            vec3 tint = mix(uFar, uNear, vLift);
            gl_FragColor = vec4(tint, alpha * uOpacity * (0.16 + vLift * 1.05));
          }
        `,
      });

      const field = new THREE.Points(geometry, material);
      field.rotation.x = -1.12;
      scene.add(field);

      const pointerTarget = new THREE.Vector2(0, 0);
      const halfWidth = (COLUMNS * SPACING) / 2;
      const halfHeight = (ROWS * SPACING) / 2;

      function onPointerMove(event: PointerEvent) {
        const box = host!.getBoundingClientRect();
        const nx = ((event.clientX - box.left) / box.width) * 2 - 1;
        const ny = ((event.clientY - box.top) / box.height) * 2 - 1;
        pointerTarget.set(nx * halfWidth, -ny * halfHeight * 0.55 - 40);
      }

      window.addEventListener("pointermove", onPointerMove, { passive: true });

      // Colors are CSS tokens, so the field follows the theme toggle.
      const themeWatcher = new MutationObserver(() => {
        uniforms.uNear.value.set(cssColor("--green", "#8fc53f"));
        uniforms.uFar.value.set(cssColor("--cyan", "#00c4ff"));
        uniforms.uOpacity.value =
          document.documentElement.dataset.theme === "light" ? 0.38 : 0.55;
      });
      themeWatcher.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      uniforms.uOpacity.value =
        document.documentElement.dataset.theme === "light" ? 0.38 : 0.55;

      const resizer = new ResizeObserver(() => {
        const w = host!.clientWidth;
        const h = Math.max(host!.clientHeight, 1);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      });
      resizer.observe(host!);

      // Scrolled past, the field stops costing anything.
      let onScreen = true;
      const visibility = new IntersectionObserver(
        ([entry]) => {
          onScreen = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      visibility.observe(host!);

      // performance.now() rather than THREE.Clock, which is deprecated, or
      // THREE.Timer, which has moved between entry points across releases.
      // All this uniform needs is elapsed seconds.
      const startedAt = performance.now();
      let frame = 0;

      function tick() {
        frame = requestAnimationFrame(tick);
        if (!onScreen) return;

        uniforms.uTime.value = (performance.now() - startedAt) / 1000;
        // Eased, so the swell trails the cursor instead of snapping to it.
        uniforms.uPointer.value.lerp(pointerTarget, 0.055);
        renderer.render(scene, camera);
      }

      tick();

      teardown = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointerMove);
        themeWatcher.disconnect();
        resizer.disconnect();
        visibility.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      teardown?.();
    };
  }, []);

  return <div ref={hostRef} className={styles.field} aria-hidden="true" />;
}

import type { NavLink } from "@/content/site";

export type NavAction =
  { kind: "route" } | { kind: "section"; sectionId: string } | { kind: "top" };

export type SectionPosition = {
  id: string;
  top: number;
};

export type NavigationClick = {
  altKey: boolean;
  button: number;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
};

export function shouldInterceptNavClick(click: NavigationClick): boolean {
  return (
    click.button === 0 &&
    !click.altKey &&
    !click.ctrlKey &&
    !click.metaKey &&
    !click.shiftKey
  );
}

export function activeSectionAtNavigationLine(
  sections: SectionPosition[],
  navigationLine: number
): string | null {
  let activeSection: string | null = null;

  for (const section of sections) {
    if (section.top > navigationLine) break;
    activeSection = section.id;
  }

  return activeSection;
}

export function activeSectionAtViewportTop(
  sections: SectionPosition[],
  navigationTarget: string | null = null
): string | null {
  return navigationTarget ?? activeSectionAtNavigationLine(sections, 1);
}

export function resolveNavAction(pathname: string, link: NavLink): NavAction {
  if (pathname === "/" && link.sectionId) {
    return { kind: "section", sectionId: link.sectionId };
  }

  if (!link.sectionId && pathname === link.href) {
    return { kind: "top" };
  }

  return { kind: "route" };
}

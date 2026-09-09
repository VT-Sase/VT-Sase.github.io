export function shouldShowBackToTop(
  scrollY: number,
  viewportHeight: number
): boolean {
  return viewportHeight > 0 && scrollY > viewportHeight / 2;
}

export function backToTopScrollBehavior(
  prefersReducedMotion: boolean
): ScrollBehavior {
  return prefersReducedMotion ? "auto" : "smooth";
}

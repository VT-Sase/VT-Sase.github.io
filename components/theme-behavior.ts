export type Theme = "light" | "dark";

const COLOR_TRANSITION_MS = 850;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;

  try {
    localStorage.setItem("vt-sase-theme", theme);
  } catch {
    // Ignore localStorage errors
  }
}

function runColorTransition(commit: () => void) {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const startViewTransition = document.startViewTransition?.bind(document);

  if (reducedMotion) {
    commit();
    return;
  }

  if (startViewTransition) {
    startViewTransition(commit);
    return;
  }

  // No View Transition API: ease every color property for one beat instead of
  // snapping the palette.
  root.classList.add("theme-transitioning");
  commit();
  window.setTimeout(() => {
    root.classList.remove("theme-transitioning");
  }, COLOR_TRANSITION_MS);
}

export function toggleTheme() {
  const root = document.documentElement;
  const nextTheme: Theme =
    root.dataset.theme === "light" ? "dark" : "light";

  runColorTransition(() => applyTheme(nextTheme));
}

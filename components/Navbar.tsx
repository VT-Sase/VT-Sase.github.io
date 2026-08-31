"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CloseIcon, MenuIcon } from "./icons";
import {
  activeSectionAtViewportTop,
  resolveNavAction,
  shouldInterceptNavClick,
} from "./nav-behavior";
import styles from "./Navbar.module.css";
import { JOIN_URL, NAV_LINKS, type NavLink } from "@/content/site";

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;

  try {
    localStorage.setItem("vt-sase-theme", nextTheme);
  } catch {
    // Ignore localStorage errors
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const navigationTargetRef = useRef<string | null>(null);

  const onHome = pathname === "/";

  function isCurrent(link: NavLink) {
    if (link.sectionId) return onHome && activeSection === link.sectionId;
    if (link.href === "/") return onHome && activeSection === null;
    return pathname === link.href;
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, link: NavLink) {
    if (!shouldInterceptNavClick(event)) return;

    setMenuOpen(false);
    navigationTargetRef.current = null;

    const action = resolveNavAction(pathname, link);
    if (action.kind === "route") return;

    if (action.kind === "top") {
      event.preventDefault();
      window.history.replaceState(window.history.state, "", link.href);
      window.scrollTo({ top: 0, behavior: "auto" });
      setActiveSection(null);
      return;
    }

    const section = document.getElementById(action.sectionId);
    if (!section) return;

    event.preventDefault();
    window.history.pushState(window.history.state, "", link.href);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    navigationTargetRef.current =
      !prefersReducedMotion && Math.abs(section.getBoundingClientRect().top) > 1
        ? action.sectionId
        : null;
    setActiveSection(action.sectionId);
    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!onHome) return;

    const sections = NAV_LINKS.flatMap((link) =>
      link.sectionId ? (document.getElementById(link.sectionId) ?? []) : []
    );
    if (sections.length === 0) return;

    let animationFrame = 0;
    let scrollEndTimer = 0;
    const supportsScrollEnd =
      "onscrollend" in (window as unknown as Record<string, unknown>);

    function updateActiveSection() {
      animationFrame = 0;

      const current = activeSectionAtViewportTop(
        sections.map((section) => ({
          id: section.id,
          top: section.getBoundingClientRect().top,
        })),
        navigationTargetRef.current
      );

      setActiveSection((active) => (active === current ? active : current));
    }

    function finishSectionNavigation() {
      scrollEndTimer = 0;
      if (!navigationTargetRef.current) return;

      navigationTargetRef.current = null;
      scheduleUpdate();
    }

    function scheduleUpdate() {
      if (navigationTargetRef.current && !supportsScrollEnd) {
        window.clearTimeout(scrollEndTimer);
        scrollEndTimer = window.setTimeout(finishSectionNavigation, 120);
      }

      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("scrollend", finishSectionNavigation);
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(scrollEndTimer);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("scrollend", finishSectionNavigation);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [onHome]);

  useLayoutEffect(() => {
    const links = linksRef.current;
    if (!links) return;

    function placeIndicator() {
      const activeLink = links?.querySelector<HTMLElement>(
        '[aria-current="page"]'
      );
      if (!links || !activeLink) return;

      const linksRect = links.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();
      links.style.setProperty(
        "--indicator-x",
        `${activeRect.left - linksRect.left}px`
      );
      links.style.setProperty("--indicator-width", `${activeRect.width}px`);
      links.style.setProperty("--indicator-opacity", "1");
    }

    placeIndicator();
    const resizeObserver = new ResizeObserver(placeIndicator);
    resizeObserver.observe(links);
    return () => resizeObserver.disconnect();
  }, [pathname, activeSection]);

  return (
    <header className={styles.header}>
      <nav className={styles.bar} aria-label="Main">
        <Link href="/" className={styles.brand} aria-label="VT SASE home">
          <Image
            src="/images/logo.png"
            alt="VT SASE"
            width={660}
            height={352}
            loading="eager"
          />
        </Link>

        <ul ref={linksRef} className={styles.links}>
          {NAV_LINKS.map((link) => {
            const isActive = isCurrent(link);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? styles.linkActive : styles.link}
                  aria-current={isActive ? "page" : undefined}
                  scroll
                  onClick={(event) => handleNavClick(event, link)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          className={styles.join}
          href={JOIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          Join Us
        </a>

        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Switch between light and dark color themes"
        >
          <span className={styles.themeThumb} aria-hidden="true" />
          <span className={styles.sunIcon} aria-hidden="true" />
          <span className={styles.moonIcon} aria-hidden="true" />
        </button>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <CloseIcon className={styles.menuIcon} />
          ) : (
            <MenuIcon className={styles.menuIcon} />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenuShell} ${
          menuOpen ? styles.mobileMenuShellOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => {
            const isActive = isCurrent(link);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive ? styles.mobileLinkActive : styles.mobileLink
                  }
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={menuOpen ? undefined : -1}
                  scroll
                  onClick={(event) => handleNavClick(event, link)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

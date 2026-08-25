"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./Navbar.module.css";
import { JOIN_URL, NAV_LINKS } from "@/content/site";

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;

  try {
    localStorage.setItem("vt-sase-theme", nextTheme);
  } catch {
    // The theme still works when browser storage is unavailable.
  }
}

/**
 * Site-wide navigation. Appears on every page via app/layout.tsx.
 *
 * Two layouts, one component: a translucent rounded pill on desktop and a
 * translucent bar with a hamburger-driven dropdown on mobile.
 *
 * Links live in content/site.ts so the footer can share them.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

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
  }, [pathname]);

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
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? styles.linkActive : styles.link}
                  aria-current={isActive ? "page" : undefined}
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

      <div className={styles.themeControl}>
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
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenuShell} ${
          menuOpen ? styles.mobileMenuShellOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive ? styles.mobileLinkActive : styles.mobileLink
                  }
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={menuOpen ? undefined : -1}
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

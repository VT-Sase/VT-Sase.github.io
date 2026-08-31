"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
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

  const onHome = pathname === "/";

  function isCurrent(link: NavLink) {
    if (link.sectionId) return onHome && activeSection === link.sectionId;
    if (link.href === "/") return onHome && activeSection === null;
    return pathname === link.href;
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

    const onScreen = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target.id);
          else onScreen.delete(entry.target.id);
        }

        const current = sections.find((section) => onScreen.has(section.id));
        setActiveSection(current?.id ?? null);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    for (const section of sections) observer.observe(section);

    return () => {
      observer.disconnect();
      setActiveSection(null);
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
                  onClick={() => setMenuOpen(false)}
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

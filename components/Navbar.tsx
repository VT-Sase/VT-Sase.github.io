"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/officers", label: "Officers" },
  { href: "/faqs", label: "FAQs" },
];

/**
 * Site-wide navigation. Appears on every page via app/layout.tsx.
 *
 * The current page is highlighted so it's obvious where you are while
 * clicking around. TODO: real styling, mobile menu, socials icon,
 * "Join us" button linking to the chapter Linktree.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        VT SASE
      </Link>

      <ul className={styles.links}>
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? styles.active : styles.link}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./icons";
import styles from "./Footer.module.css";
import { FOOTER_LINKS, SOCIALS } from "@/content/site";

const socialIcons = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SOCIALS.linkedin,
    Icon: LinkedInIcon,
  },
  {
    key: "discord",
    label: "Discord",
    href: SOCIALS.discord,
    Icon: DiscordIcon,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: SOCIALS.facebook,
    Icon: FacebookIcon,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: SOCIALS.instagram,
    Icon: InstagramIcon,
  },
];

/**
 * Site-wide footer. Appears on every page via app/layout.tsx.
 *
 * Links and social URLs come from content/site.ts — edit them there, not here.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Link href="/" aria-label="VT SASE home" className={styles.brand}>
            <Image
              src="/images/logo-mark.png"
              alt="VT SASE"
              width={625}
              height={192}
            />
          </Link>

          <ul className={styles.links}>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactColumn}>
          <h2 className={styles.contactHeading}>Contact</h2>

          <ul className={styles.socials}>
            {socialIcons.map(({ key, label, href, Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <Icon className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>

          <a
            className={styles.textLink}
            href={SOCIALS.linktree}
            target="_blank"
            rel="noreferrer"
          >
            Linktree
          </a>
          <a
            className={styles.textLink}
            href={SOCIALS.remind}
            target="_blank"
            rel="noreferrer"
          >
            Remind
          </a>
        </div>
      </div>
    </footer>
  );
}

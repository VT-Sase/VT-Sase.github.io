import Image from "next/image";
import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LinktreeIcon,
  RemindIcon,
} from "./icons";
import styles from "./Footer.module.css";
import { SOCIALS } from "@/content/site";

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
  {
    key: "linktree",
    label: "Linktree",
    href: SOCIALS.linktree,
    Icon: LinktreeIcon,
  },
  {
    key: "remind",
    label: "Remind",
    href: SOCIALS.remind,
    Icon: RemindIcon,
  },
];

/**
 * Site-wide footer. Appears on every page via app/layout.tsx.
 *
 * Deliberately does not repeat the navbar's links — it is the logo, who we
 * are in one line, and every channel the chapter can be reached on. Social
 * URLs come from content/site.ts.
 */
export default function Footer() {
  const year = new Date().getFullYear();

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

          <p className={styles.tagline}>
            Society of Asian Scientists and Engineers — Virginia Tech chapter
          </p>
        </div>

        <div className={styles.contactColumn}>
          <h2 className={styles.contactHeading}>Connect</h2>

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

          <p className={styles.copyright}>© {year} SASE at Virginia Tech</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        Designed &amp; developed by the SASE Web Development Team
      </div>
    </footer>
  );
}

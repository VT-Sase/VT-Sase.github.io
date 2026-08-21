# VT SASE Website

The official website for the **Society of Asian Scientists and Engineers (SASE)**
chapter at **Virginia Tech**, live at **[sase-vt.org](https://sase-vt.org/)**.

Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript.

**New to the committee?** Start with [Getting Started](#getting-started) and
[Making Changes](#making-changes). They assume no prior experience with this repo.

## Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Picking Something to Work On](#picking-something-to-work-on)
- [Making Changes](#making-changes)
- [Branch Naming](#branch-naming)
- [Adding Images](#adding-images)
- [Project Structure](#project-structure)
- [Colors and Fonts](#colors-and-fonts)
- [Commands](#commands)
- [Secrets](#secrets)
- [Deployment](#deployment)
- [Need Help?](#need-help)
- [Admin Setup (Webmaster Only)](#admin-setup-webmaster-only)

## About

- The VT SASE chapter website: **https://sase-vt.org/**
- Maintained by the **Webmaster** and the **Web Dev Committee**.
- We're rebuilding the old React + Vite site in **Next.js**. This repo is the new version.

**Key links** — bookmark these:

| What            | Where                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Live site       | [sase-vt.org](https://sase-vt.org/)                                                                                         |
| Designs (Figma) | [Sase-website](https://www.figma.com/design/07019PjaxQ3sWgH0dXuSCK/Sase-website) — build against the **Final Version** page |
| To-do list      | [Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)                                                             |

Build what the Figma says. If the design and this README disagree about a color
or a size, the design wins — but flag it to the Webmaster so the token gets fixed
rather than worked around.

## Getting Started

Never touched this repo before? Do these once, in order:

1. **Install Node.js** — download the **LTS** version from [nodejs.org](https://nodejs.org/en/download).
   We build against **Node 22** (see `.nvmrc`); if you use `nvm`, run `nvm use`
   in this folder and it picks the right version automatically.
2. **Install pnpm** (our package manager):
   ```bash
   npm install -g pnpm
   ```
   > Only ever use `pnpm` in this repo — never `npm install` or `yarn`. They
   > create a different lockfile and everyone ends up on different versions of
   > the same packages. If you see a `package-lock.json` appear, delete it.
3. **Clone the repo:**
   ```bash
   git clone https://github.com/VT-Sase/vt-sase-website.git
   cd vt-sase-website
   ```
4. **Install dependencies:**
   ```bash
   pnpm install
   ```
5. **Start the dev server:**
   ```bash
   pnpm dev
   ```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. The page
auto-refreshes as you edit files. You're ready to code.

## Picking Something to Work On

The **[Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)** is our
to-do list. Everything we're building is there.

1. Find an issue you want. Filter by **`good first issue`** if this is your first
   time, or **`content`** if you'd rather do data entry (filling in `content/*.ts`)
   than write React.
2. **Comment on it and assign yourself**, so two people don't build the same thing
   and the board shows who's on what.
3. **One issue → one branch → one Pull Request.** Don't bundle several issues
   into one PR — it makes review much harder.

No open issue for your idea? Open one first, or ask in the Discord.

## Making Changes

We use a Pull Request (PR) workflow. Follow these steps every time you work on something:

1. **Get the latest code:**
   ```bash
   git pull origin main
   ```
2. **Create a branch** named for what you're doing (see
   [Branch Naming](#branch-naming)):
   ```bash
   git checkout -b feature/what-you-changed
   # example: git checkout -b feature/officers-page
   ```
3. **Make your changes, then save (commit) them:**
   ```bash
   git add .
   git commit -m "short description of what you changed"
   ```
4. **Push your branch** (same name you created in step 2):
   ```bash
   git push origin feature/what-you-changed
   ```
5. **Open a Pull Request** on [GitHub](https://github.com/VT-Sase/vt-sase-website):
   click **"Compare & pull request"** and set the target to `main`. Fill in the
   template, and **add screenshots for anything visual**.
6. **Wait for 1 approval** from the Webmaster or another reviewer. Post the PR
   link in Discord — we aim to review within 12 hours so nobody sits blocked.
   Every PR gets an automatic **preview URL**; paste it in the PR so reviewers
   and designers can click through the real thing instead of reading a diff.
7. **Merge** once approved and CI passes (green check). Use **Squash and
   merge** — your branch's commits get combined into one tidy commit on `main`,
   so it doesn't matter if yours are named "fix" and "fix again".
8. Your change **auto-deploys to the live site**.

> **Never push directly to `main`.** All changes go through a Pull Request, so
> the live site is protected and someone can double-check your work.

**If your branch falls behind `main`** (someone else merged while you were
working), pull their changes into your branch:

```bash
git checkout main && git pull      # get the latest main
git checkout your-branch           # back to your work
git merge main                     # bring main's changes in
```

Use `merge`, not `rebase`. Rebase rewrites history and is much harder to undo
if it goes sideways.

## Branch Naming

Name your branch so everyone can tell what it's for:

| Prefix     | Use for                                    | Example                   |
| ---------- | ------------------------------------------ | ------------------------- |
| `feature/` | New features                               | `feature/alumni-page`     |
| `fix/`     | Bug fixes                                  | `fix/broken-nav-link`     |
| `update/`  | Content updates (event photos, text, etc.) | `update/fall-2026-events` |

## Adding Images

Compress images before adding them — large files make the site slow to load.

1. Put the **original** (full-size) image in `public/images/original/`.
2. **Compress it** with [compress2go.com](https://www.compress2go.com/) or
   [compressor.io](https://compressor.io/).
3. Put the **compressed** version in `public/images/`.
4. Reference it from `/images/filename.ext`:
   ```tsx
   import Image from "next/image";

   <Image
     src="/images/team-photo.jpg"
     alt="SASE team at nationals"
     width={800}
     height={600}
   />;
   ```
5. Keep images **under 200 KB** when possible.

## Project Structure

A Next.js **App Router** project. Every folder under `app/` is a route on the
live site. This is the whole tree — if a file isn't listed here, it's config
you can ignore:

```
vt-sase-website/
├── app/                        every folder here = one page on the site
│   ├── layout.tsx              wraps EVERY page (navbar + footer live here)
│   ├── globals.css             site-wide styles: colors, fonts, resets
│   ├── page.tsx                /            Home
│   ├── about/page.tsx          /about       About
│   ├── events/page.tsx         /events      Events
│   ├── officers/page.tsx       /officers    Officers
│   └── faqs/page.tsx           /faqs        FAQs
├── components/                 shared UI reused across pages
│   ├── Navbar.tsx
│   └── Footer.tsx
├── content/                    page DATA (officers, events, FAQs, sponsors)
│   ├── officers.ts             edit these to change what the site says —
│   ├── events.ts               no React needed, just fill in the lists
│   ├── faqs.ts
│   └── sponsors.ts
├── public/
│   └── images/                 compressed images; originals in images/original/
└── .github/                    PR template, code owners, CI — Webmaster's area
```

**Everything else in the repo root is config** (`package.json`, `tsconfig.json`,
`next.config.ts`, and friends). Ignore it — and ask the Webmaster before changing
any of it, since a broken config breaks the build for everyone.

**Which file do I work in?**

| I want to...                              | Edit this                                                     |
| ----------------------------------------- | ------------------------------------------------------------- |
| Change what's on one page                 | that page's `page.tsx`                                        |
| Add/edit officers, events, FAQs, sponsors | that list in `content/`                                       |
| Change the navbar or footer               | `components/Navbar.tsx` / `components/Footer.tsx`             |
| Change something on _every_ page          | `app/layout.tsx`                                              |
| Change colors, fonts, site-wide styles    | `app/globals.css` (see [Colors and Fonts](#colors-and-fonts)) |
| Style one page or component only          | a `page.module.css` next to that file                         |
| Add a photo or logo                       | `public/images/` (see [Adding Images](#adding-images))        |
| Add a brand-new page                      | new folder in `app/` with a `page.tsx` inside                 |

**Ground rules so we don't step on each other:**

- One person per page at a time — claim yours in Discord before you start.
- Shared files (`app/layout.tsx`, `app/globals.css`, `components/`) affect
  everyone. Check in before changing them.
- Page-specific styles go in a **CSS Module** (`page.module.css`) next to the
  page, not in `globals.css`. That way your styles can't leak into someone
  else's page.
- Each `page.tsx` starts with a comment block listing the sections that page
  needs. Build those sections, then delete the comment.
- Import shared code with the `@/` prefix, e.g. `import Navbar from "@/components/Navbar"`.
- **Never hardcode a hex value.** Use the variables — `color: var(--foreground)`,
  not `color: #fff`. Hardcoded colors are how a page ends up unreadable in dark mode.
- **Run `pnpm format`, `pnpm lint`, and `pnpm typecheck` before you push.** CI runs
  the same three and will fail your PR if you skip them.
- **Text and data live in `content/`, not in the page.** If you're adding an
  officer or an event, edit `content/officers.ts` or `content/events.ts` — the
  page reads from those lists. This is also why two people can work on the same
  page at once: one builds the layout, the other fills in the content.

## Colors and Fonts

**Read this before you style anything.** Everything on the site uses the colors
and text sizes below. They come from the Figma **local styles** panel, which is
the source of truth — if something here disagrees with Figma, Figma wins and the
Webmaster fixes this table.

### The one rule

**Never type a color code into your CSS.** Use a variable:

```css
background: var(--bg-card); /* yes */
background: #0d2333; /* no */
```

Both of those produce the exact same dark blue today. The difference shows up
later: when we add light mode, the first one switches automatically and the
second one stays dark forever and has to be hunted down by hand.

This is also why the variables are named after **what they are for**, not what
color they are. `--bg-card` stays correct in light mode. `--dark-blue` would not.

### Fonts

We use two, both free from Google Fonts:

- **Instrument Sans** — all headings
- **Onest** — all body text

They load through `next/font/google` in `app/layout.tsx`, so there is nothing to
download and nothing to host.

| Style | Font            | Weight   | Desktop | Phone | Use it for             |
| ----- | --------------- | -------- | ------- | ----- | ---------------------- |
| `h2`  | Instrument Sans | Bold     | 48px    | 28px  | Major section headings |
| `h3`  | Instrument Sans | SemiBold | 32px    | 22px  | Subsections            |
| `h4`  | Instrument Sans | SemiBold | 18px    | 16px  | Card titles            |
| `h5`  | Onest           | Regular  | 16px    | 14px  | Body text              |
| `h6`  | Onest           | Light    | 12px    | 12px  | Small descriptor text  |

Line height is **Auto** and letter spacing is **0%** on every one — don't set them.

**You should never write a phone font size yourself.** The switch happens
automatically at the breakpoint. Write `<h2>` and it is 48px on a laptop and 28px
on a phone with no extra work from you.

### Colors

| Variable          | Dark (default) | Light      | What it is                    |
| ----------------- | -------------- | ---------- | ----------------------------- |
| `--bg-page`       | `#0D314B`      | `#D1E7B0`  | The page background           |
| `--bg-nav`        | `#001727`      | `#CCE792`  | Navbar and footer background  |
| `--bg-card`       | `#0D2333`      | `#F0F7E0`* | Cards (officers, events)      |
| `--button-bg`     | `#168AAD`      | `#CFE7DC`  | Buttons                       |
| `--blue-light`    | `#46A7C4`      | `#A5D8E6`* | Lighter blue background areas |
| `--blue-lightest` | `#9BE8FF`      | `#D8F0F8`* | Lightest blue background      |
| `--text-primary`  | `#FFFFFF`      | `#001727`* | Normal text                   |
| `--text-blue`     | `#00C4FF`      | `#1E6091`  | Blue accent text              |
| `--text-green`    | `#8FC53F`      | `#366D34`  | Green accent text             |

**\* These four are placeholders, not from Figma.** The designers gave us light
values for five of the nine colors; these four are stand-ins so that light mode
can be built and tested now instead of sitting blocked. They are chosen to fit
the palette and all pass WCAG AA contrast against `--text-primary`:

| Placeholder       | Value     | Contrast with text | Reasoning                                                  |
| ----------------- | --------- | ------------------ | ---------------------------------------------------------- |
| `--bg-card`       | `#F0F7E0` | 16.6:1             | Paler than the page, so cards lift off the background      |
| `--text-primary`  | `#001727` | 13.7:1             | Reuses the dark navy already in the palette                |
| `--blue-light`    | `#A5D8E6` | 11.8:1             | Same hue as the dark-mode blue, lightened for a light page |
| `--blue-lightest` | `#D8F0F8` | 15.4:1             | The palest tint of that same blue                          |

**Please still get the real values from the designers**, and swap them in when
they arrive. Issue [#37](https://github.com/VT-Sase/vt-sase-website/issues/37) is
tagged `blocked-by-design` as the reminder. If a design decision depends on one of
these being exactly right, ask rather than trusting the placeholder.

Two of the _real_ colors are close to the accessibility limit — blue text on the
page background is 5.0:1 and green text is 4.7:1, against a 4.5:1 minimum. They
pass, but do not use either for small text, and do not darken the page background
without rechecking them.

### Also in Figma, not yet in code

These exist as Figma styles and still need someone to translate them into CSS:

- **Gradients** — `dark mode gradient`, `light mode gradient`,
  `blue-green-top/mid/bot-gradient`, `2-part-gradient-bottom`
- **Blob fills** — two decorative shapes under the `shapes` group
- **Card shadow** — one effect style, used on cards

### Where this lives

All of it is defined in `app/globals.css`, like this:

```css
:root {
  --bg-page: #0d314b; /* dark is our default */
  --bg-nav: #001727;
}

[data-theme="light"] {
  --bg-page: #d1e7b0; /* same names, light values */
  --bg-nav: #cce792;
}
```

Because both blocks use the same names, switching the theme swaps every color on
the site at once. That is the whole trick, and it only works if nobody types a
color code directly.

⚠️ `app/globals.css` is a **shared file** — it affects every page. Ask the
Webmaster before changing it. Your own page's styles belong in a
`page.module.css` next to that page.

## Commands

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Start the local dev server at http://localhost:3000 |
| `pnpm build`        | Build the production site (what CI runs)            |
| `pnpm lint`         | Check for style problems and common mistakes        |
| `pnpm format`       | Auto-format all files with Prettier                 |
| `pnpm format:check` | Check formatting without changing files             |
| `pnpm typecheck`    | Check TypeScript types without building             |

## Secrets

- **Never commit passwords, API keys, or tokens.**
- Real secrets go in `.env.local`, which is gitignored and stays on your machine.
- Add a placeholder to `.env.example` so everyone else knows the variable exists.

## Deployment

- Merging to `main` **auto-deploys to production** (the live site updates automatically).
- **Domain:** [sase-vt.org](https://sase-vt.org/), registered on GoDaddy.
- **If something breaks:** contact the **Webmaster immediately** so it can be rolled back.

## Need Help?

- Ask in the **SASE Web Dev Discord** server — no question is too basic.
- Read the [Next.js docs](https://nextjs.org/docs).
- Contact the current **Webmaster**.

This README is the main guide — start here. [CONTRIBUTING.md](./.github/CONTRIBUTING.md)
is a short summary of the same rules, shown to first-time contributors by GitHub.

## Admin Setup (Webmaster Only)

One-time GitHub settings the Webmaster configures. Committee members can skip this.

**Branch protection** — Settings → Branches → add a rule for `main`:

- Require a pull request before merging, with **1 required approval**.
- Require status checks to pass — select the **`Lint & Build`** check so nothing
  merges unless CI is green.
- Block direct pushes to `main` (don't allow bypassing the above).

**Auto-cleanup** — Settings → General → Pull Requests:

- Enable **Automatically delete head branches** to remove merged branches.

The default reviewer is set in [`.github/CODEOWNERS`](./.github/CODEOWNERS).

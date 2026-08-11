# VT SASE Website

The official website for the **Society of Asian Scientists and Engineers (SASE)**
chapter at **Virginia Tech**, live at **[sase-vt.org](https://sase-vt.org/)**.

Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript.

**New to the committee?** Start with [Getting Started](#getting-started) and
[Making Changes](#making-changes). They assume no prior experience with this repo.

## Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Making Changes](#making-changes)
- [Branch Naming](#branch-naming)
- [Adding Images](#adding-images)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Deployment](#deployment)
- [Need Help?](#need-help)
- [Admin Setup (Webmaster Only)](#admin-setup-webmaster-only)

## About

- The VT SASE chapter website: **https://sase-vt.org/**
- Maintained by the **Webmaster** and the **Web Dev Committee**.
- We're rebuilding the old React + Vite site in **Next.js**. This repo is the new version.

## Getting Started

Never touched this repo before? Do these once, in order:

1. **Install Node.js** — download the **LTS** version from [nodejs.org](https://nodejs.org/en/download).
2. **Install pnpm** (our package manager):
   ```bash
   npm install -g pnpm
   ```
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

## Making Changes

We use a Pull Request (PR) workflow. Follow these steps every time you work on something:

1. **Get the latest code:**
   ```bash
   git pull origin main
   ```
2. **Create a branch** named after yourself and what you're doing:
   ```bash
   git checkout -b your-name/what-you-changed
   # example: git checkout -b maria/update-events-page
   ```
3. **Make your changes, then save (commit) them:**
   ```bash
   git add .
   git commit -m "short description of what you changed"
   ```
4. **Push your branch:**
   ```bash
   git push origin your-name/what-you-changed
   ```
5. **Open a Pull Request** on [GitHub](https://github.com/VT-Sase/vt-sase-website):
   click **"Compare & pull request"** and set the target to `main`.
6. **Wait for 1 approval** from the Webmaster or another reviewer.
7. **Merge** once approved and CI passes (green check).
8. Your change **auto-deploys to the live site**.

> **Never push directly to `main`.** All changes go through a Pull Request, so
> the live site is protected and someone can double-check your work.

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
├── public/
│   └── images/                 compressed images; originals in images/original/
└── .github/                    PR template, code owners, CI — Webmaster's area
```

**Everything else in the repo root is config** — `package.json`,
`tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, and friends. These have
to sit at the root because that's the only place the tools look for them. You
can ignore all of it; if you ever do need to change one, ask the Webmaster
first, since a broken config breaks the build for everybody.

**Which file do I work in?**

| I want to...                           | Edit this                                              |
| -------------------------------------- | ------------------------------------------------------ |
| Change what's on one page              | that page's `page.tsx`                                 |
| Change the navbar or footer            | `components/Navbar.tsx` / `components/Footer.tsx`      |
| Change something on _every_ page       | `app/layout.tsx`                                       |
| Change colors, fonts, site-wide styles | `app/globals.css`                                      |
| Style one page or component only       | a `page.module.css` next to that file                  |
| Add a photo or logo                    | `public/images/` (see [Adding Images](#adding-images)) |
| Add a brand-new page                   | new folder in `app/` with a `page.tsx` inside          |

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

## Commands

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Start the local dev server at http://localhost:3000 |
| `pnpm build`        | Build the production site (what CI runs)            |
| `pnpm lint`         | Check for style problems and common mistakes        |
| `pnpm format`       | Auto-format all files with Prettier                 |
| `pnpm format:check` | Check formatting without changing files             |

## Deployment

- Merging to `main` **auto-deploys to production** (the live site updates automatically).
- **Domain:** [sase-vt.org](https://sase-vt.org/), registered on GoDaddy.
- **If something breaks:** contact the **Webmaster immediately** so it can be rolled back.

## Need Help?

- Ask in the **SASE Web Dev Discord** server — no question is too basic.
- Read the [Next.js docs](https://nextjs.org/docs).
- Contact the current **Webmaster**.

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for contribution guidelines.

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

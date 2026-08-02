# VT SASE Website

The official website for the **Society of Asian Scientists and Engineers (SASE)**
chapter at **Virginia Tech** — live at **[sase-vt.org](https://sase-vt.org/)**.

Built with [Next.js](https://nextjs.org/) (App Router) + TypeScript.

> 📖 New to the committee? Read the **[Getting Started](#getting-started-for-new-committee-members)**
> and **[How to Make Changes](#how-to-make-changes-git-workflow)** sections below — they
> assume no prior experience with this repo.

---

## About

- This is the VT SASE chapter website: **https://sase-vt.org/**
- Maintained by the **Webmaster** and the **Web Dev Committee**.
- We're migrating the site from React + Vite to **Next.js** — this repo is the new version.

---

## Getting Started (for new committee members)

Never touched this repo before? Follow these steps top to bottom. 💜

1. **Install Node.js** (this runs the website on your computer).
   Download the **LTS** version from [nodejs.org](https://nodejs.org/en/download).

2. **Install pnpm** (our package manager). In your terminal, run:

   ```bash
   npm install -g pnpm
   ```

3. **Clone the repo** (downloads the code to your computer):

   ```bash
   git clone https://github.com/VT-Sase/vt-sase-website.git
   ```

4. **Go into the project folder:**

   ```bash
   cd vt-sase-website
   ```

5. **Install the project's dependencies:**

   ```bash
   pnpm install
   ```

6. **Start the development server:**

   ```bash
   pnpm dev
   ```

   Then open **[http://localhost:3000](http://localhost:3000)** in your browser.
   The page auto-refreshes as you edit files.

7. **You're ready to code!** 🎉

---

## How to Make Changes (git workflow)

We use a simple Pull Request (PR) workflow. Even if you only know basic git, just
follow these steps every time you work on something:

1. **Get the latest code** from the main branch:

   ```bash
   git pull origin main
   ```

2. **Create your own branch** to work on (name it after yourself + what you're doing):

   ```bash
   git checkout -b your-name/what-you-changed
   # example: git checkout -b maria/update-events-page
   ```

3. **Make your changes**, then save (commit) them:

   ```bash
   git add .
   git commit -m "short description of what you changed"
   ```

4. **Push your branch** to GitHub:

   ```bash
   git push origin your-name/what-you-changed
   ```

5. **Open a Pull Request** — go to the repo on
   [GitHub](https://github.com/VT-Sase/vt-sase-website), and click the
   **"Compare & pull request"** button that appears. Set the target to `main`.

6. **Wait for 1 approval** from the Webmaster or another reviewer.

7. **Once approved and CI passes** (green ✅), click **Merge**.

8. **Your change auto-deploys to the live site!** 🚀

> ⚠️ **Never push directly to `main`.** All changes go through a Pull Request.
> This protects the live site and lets someone double-check your work.

---

## Branch Naming Convention

Name your branch so everyone can tell what it's for:

| Prefix     | Use for                                    | Example                   |
| ---------- | ------------------------------------------ | ------------------------- |
| `feature/` | New features                               | `feature/alumni-page`     |
| `fix/`     | Bug fixes                                  | `fix/broken-nav-link`     |
| `update/`  | Content updates (event photos, text, etc.) | `update/fall-2026-events` |

---

## Adding Images

Images must be **compressed** before they go on the site — big images make the
site slow to load. Follow this workflow (from the committee handbook):

1. Put the **original** (full-size) image in `public/images/original/`.
2. **Compress it** using [compress2go.com](https://www.compress2go.com/) or
   [compressor.io](https://compressor.io/).
3. Put the **compressed** version in `public/images/`.
4. Reference it in your code from `/images/filename.ext`. For example:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/team-photo.jpg"
     alt="SASE team at nationals"
     width={800}
     height={600}
   />;
   ```

5. **Keep images under 200 KB** when possible.

---

## Project Structure

This is a Next.js **App Router** project. The folders you'll touch most:

```
vt-sase-website/
├── app/          → pages and layouts (each folder = a route/page on the site)
├── components/   → reusable React components (buttons, navbar, cards, etc.)
├── public/       → static files served as-is (images, favicon, etc.)
│   └── images/   → site images (compressed) — originals live in images/original/
└── ...config files
```

- **`app/`** — Add a page by creating a folder with a `page.tsx` inside it.
  `app/page.tsx` is the homepage. `app/layout.tsx` wraps every page.
- **`components/`** — Shared UI you reuse across pages. Import with `@/components/...`.
- **`public/`** — Anything here is available at the site root (e.g. `public/images/logo.png` → `/images/logo.png`).

---

## Useful Commands

| Command             | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Start the local dev server at http://localhost:3000 |
| `pnpm build`        | Build the production site (what CI runs)            |
| `pnpm lint`         | Check code for style problems and common mistakes   |
| `pnpm format`       | Auto-format all files with Prettier                 |
| `pnpm format:check` | Check formatting without changing files             |

---

## Deployment

- **Merging to `main` auto-deploys to production** (the live site updates automatically).
- **Domain:** [sase-vt.org](https://sase-vt.org/) (registered on GoDaddy).
- **If something breaks:** contact the **Webmaster immediately** so it can be rolled back.

---

## Need Help?

- 💬 Ask in the **SASE Web Dev Discord** server — no question is too basic!
- 📚 Check the [Next.js docs](https://nextjs.org/docs).
- 🧑‍💻 Contact the current **Webmaster**.

See also **[CONTRIBUTING.md](./CONTRIBUTING.md)** for contribution guidelines.

---

## Admin Setup (Webmaster Only)

> These are one-time settings the Webmaster configures on GitHub. Committee
> members can ignore this section.

To protect the live site, enable **branch protection** on `main`:

**GitHub → Settings → Branches → Add branch ruleset (or branch protection rule)** for `main`:

- ✅ **Require a pull request before merging** — with **1 required approval**.
- ✅ **Require status checks to pass before merging** — select the **`Lint & Build`**
  check (from CI) so nothing merges unless CI is green.
- ✅ **Do not allow bypassing the above settings** / block direct pushes to `main`
  (so all changes go through a PR).

Then, to keep the repo tidy:

**GitHub → Settings → General → Pull Requests:**

- ✅ **Automatically delete head branches** — deletes merged branches automatically.

The default reviewer is set in [`.github/CODEOWNERS`](./.github/CODEOWNERS).

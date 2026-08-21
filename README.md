# VT SASE Website

The official website for the **Society of Asian Scientists and Engineers** at
**Virginia Tech** — live at **[sase-vt.org](https://sase-vt.org/)**.

Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript. We're
rebuilding the old React + Vite site; this repo is the new version.

**New here?** Start with [Getting Started](#-getting-started), then pick something
from the [Issues tab](https://github.com/VT-Sase/vt-sase-website/issues). No prior
experience with this repo assumed.

## Contents

- [🚀 Getting Started](#-getting-started)
- [📝 Content](#-content)
- [🎨 Colors](#-colors)
- [🔤 Fonts](#-fonts)
- [🌿 How Git Works Here](#-how-git-works-here)
- [📁 Project Structure](#-project-structure)
- [📋 Issues](#-issues)
- [🔗 Resources](#-resources)
- [💻 Commands](#-commands)
- [🔒 Secrets](#-secrets)
- [🚢 Deployment](#-deployment)
- [Admin Setup (Webmaster only)](#admin-setup-webmaster-only)

## 🚀 Getting Started

You'll do this once. It takes about 15 minutes, most of which is waiting on
downloads. Everything below runs in your **terminal** (Terminal on Mac, PowerShell
on Windows).

### First, three things you probably already have

| What                 | Check it with   | If you don't have it                                                                            |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------- |
| A **GitHub account** | —               | [Sign up](https://github.com/signup), then tell the Webmaster your username so they can add you |
| **Git**              | `git --version` | [git-scm.com/downloads](https://git-scm.com/downloads)                                          |
| A **code editor**    | —               | [VS Code](https://code.visualstudio.com/) is what most of us use                                |

### 1. Install Node

Node is what lets your computer run JavaScript outside a browser. Next.js is built
on it, so nothing works without it.

Download the **Node 22 LTS** installer from
[nodejs.org](https://nodejs.org/en/download) and run it. **Close and reopen your
terminal afterwards** — it won't see Node until you do.

```bash
node --version    # should print v22.something
```

> Already have a different Node version? Install [nvm](https://github.com/nvm-sh/nvm)
> and run `nvm use` in this folder — `.nvmrc` picks the right one automatically.

### 2. Install pnpm

pnpm downloads and manages the code libraries this project depends on. `npm` comes
free with Node, so use it once to install pnpm:

```bash
npm install -g pnpm
pnpm --version    # should print a number
```

> ⚠️ That's the **only** time you'll type `npm` in this project. After this, always
> `pnpm`. `npm install` and `yarn` create a different lockfile and everyone ends up
> on mismatched package versions. If a `package-lock.json` ever appears, delete it.

### 3. Download the code

```bash
git clone https://github.com/VT-Sase/vt-sase-website.git
cd vt-sase-website
```

That `cd` matters — every command from here runs **inside** that folder.

### 4. Install the project's libraries

```bash
pnpm install
```

Takes a minute or two the first time. It creates a `node_modules/` folder with a
few hundred packages in it. That folder is gitignored — never commit it, and don't
worry about its size.

### 5. Run it

```bash
pnpm dev
```

Open **[localhost:3000](http://localhost:3000)**. 🎉

Leave that command running while you work — save a file and the page updates by
itself. Press **Ctrl+C** in the terminal to stop it.

### If something goes wrong

| Problem                             | Fix                                                         |
| ----------------------------------- | ----------------------------------------------------------- |
| `command not found: node` or `pnpm` | Close the terminal and open a new one                       |
| Wrong Node version                  | `nvm use`, or reinstall Node 22                             |
| `pnpm install` fails partway        | Delete `node_modules/`, run `pnpm install` again            |
| Port 3000 already in use            | Something else is running — `pnpm dev` will offer port 3001 |
| Still stuck                         | Ask in Discord and paste the actual error text 💬           |

## 📝 Content

Every word and photo on the site lives in `content/`, separate from the code.
**You don't need to know React to edit these.**

| File                  | What's in it                           |
| --------------------- | -------------------------------------- |
| `content/officers.ts` | Names, roles, majors, photos, LinkedIn |
| `content/events.ts`   | Event names, dates, locations, blurbs  |
| `content/faqs.ts`     | Questions and answers                  |
| `content/sponsors.ts` | Sponsor names and logos                |

Open one and copy the pattern already there. Keep the commas, quotes, and curly
braces exactly as you found them — that's the part that breaks.

**Pages read from these lists**, so adding next semester's events is a one-file
change. It also means two people can work on the same page at once: one builds
the layout, the other fills in the words.

**Adding a photo:** compress it first at
[compress2go.com](https://www.compress2go.com/) — aim for under 200 KB — then drop
it in `public/images/` and reference it as `/images/yourfile.jpg`. Big photos make
the site crawl on phones, which is where most people will see it.

## 🎨 Colors

**The one rule: never type a color code into your CSS.** Use a variable.

```css
background: var(--bg-card); /* yes */
background: #0d2333; /* no */
```

Both give the same dark blue today. The difference shows up when we add light
mode — the first switches automatically, the second stays dark forever and has to
be hunted down by hand.

This is also why variables are named for **what they do**, not what color they
are. `--bg-card` is still true in light mode. `--dark-blue` wouldn't be.

| Variable          | Dark (default) | Light        | What it is         |
| ----------------- | -------------- | ------------ | ------------------ |
| `--bg-page`       | `#0D314B`      | `#D1E7B0`    | Page background    |
| `--bg-nav`        | `#001727`      | `#CCE792`    | Navbar and footer  |
| `--bg-card`       | `#0D2333`      | `#F0F7E0` \* | Cards              |
| `--button-bg`     | `#168AAD`      | `#CFE7DC`    | Buttons            |
| `--blue-light`    | `#46A7C4`      | `#A5D8E6` \* | Lighter blue areas |
| `--blue-lightest` | `#9BE8FF`      | `#D8F0F8` \* | Lightest blue      |
| `--text-primary`  | `#FFFFFF`      | `#001727` \* | Normal text        |
| `--text-blue`     | `#00C4FF`      | `#1E6091`    | Blue accent text   |
| `--text-green`    | `#8FC53F`      | `#366D34`    | Green accent text  |

**How the switch works** — same names, two sets of values, in `app/globals.css`:

```css
:root {
  --bg-page: #0d314b; /* dark is our default */
}

[data-theme="light"] {
  --bg-page: #d1e7b0; /* same name, light value */
}
```

Flipping `data-theme` swaps every color at once. That's the whole trick, and it
only works if nobody types a color code directly.

> ⚠️ **These aren't in the code yet.** `app/globals.css` still has the Next.js
> starter palette. Issue
> [#28](https://github.com/VT-Sase/vt-sase-website/issues/28) puts these in, and
> it blocks every page — so it goes first.

**About the `*` values:** the designers gave us light-mode colors for five of
nine. Those four are placeholders picked to fit the palette so light mode isn't
blocked — all pass WCAG AA contrast. Swap in the real ones when they arrive
([#37](https://github.com/VT-Sase/vt-sase-website/issues/37) tracks it).

Also worth knowing: blue text on the page background is 5.0:1 and green text is
4.7:1, against a 4.5:1 minimum. Both pass, but don't use either for small text.

**Still to translate from Figma:** the gradients, the two blob shapes, and the
card shadow effect.

## 🔤 Fonts

Two typefaces, both free from Google Fonts, loaded via `next/font/google`:

- **Instrument Sans** — headings
- **Onest** — body text

| Style | Font            | Weight   | Desktop | Phone | Use for                |
| ----- | --------------- | -------- | ------- | ----- | ---------------------- |
| `h2`  | Instrument Sans | Bold     | 48px    | 28px  | Major section headings |
| `h3`  | Instrument Sans | SemiBold | 32px    | 22px  | Subsections            |
| `h4`  | Instrument Sans | SemiBold | 18px    | 16px  | Card titles            |
| `h5`  | Onest           | Regular  | 16px    | 14px  | Body text              |
| `h6`  | Onest           | Light    | 12px    | 12px  | Small descriptor text  |

Line height **Auto**, letter spacing **0%** on all of them.

**Never write a phone font size yourself.** The switch happens automatically at
the breakpoint — write `<h2>` and it's 48px on a laptop, 28px on a phone.

> 📌 Figma has no `h1` style, but every page needs exactly one `<h1>` for screen
> readers and Google. Style it like `h2` unless the designers say otherwise.

## 🌿 How Git Works Here

Every change goes through a **Pull Request** — a request to merge your work into
the live site, so someone can look it over first.

```bash
git pull origin main                      # 1. get the latest
git checkout -b feature/officers-page     # 2. branch off
                                          # 3. do your work
git add .
git commit -m "what you changed"          # 4. save it
git push origin feature/officers-page     # 5. send it up
```

Then on GitHub, click **"Compare & pull request"** and target `main`. Add
screenshots for anything visual, and post the link in Discord.

**That's it — the Webmaster reviews it and merges.** You don't need to do anything
else. A PR just means someone looks it over before it goes to the live site.

**Branch names:**

| Prefix     | For             | Example                   |
| ---------- | --------------- | ------------------------- |
| `feature/` | New features    | `feature/alumni-page`     |
| `fix/`     | Bug fixes       | `fix/broken-nav-link`     |
| `update/`  | Content updates | `update/fall-2026-events` |

> 🚫 **Never push directly to `main`.** That's the live site.

**Fell behind main?** Someone merged while you were working:

```bash
git checkout main && git pull
git checkout your-branch
git merge main
```

Use `merge`, not `rebase` — rebase rewrites history and is much harder to undo.

## 📁 Project Structure

Every folder under `app/` is a page on the live site.

```
vt-sase-website/
├── app/                    every folder here = one page
│   ├── layout.tsx          wraps EVERY page (navbar + footer)
│   ├── globals.css         colors, fonts, resets
│   ├── page.tsx            /            Home
│   ├── about/page.tsx      /about       About
│   ├── events/page.tsx     /events      Events
│   ├── officers/page.tsx   /officers    Officers
│   └── faqs/page.tsx       /faqs        FAQs
├── components/             shared UI (Navbar, Footer)
├── content/                the words and data ← you probably want this
├── public/images/          compressed photos
└── .github/                templates, CI — Webmaster's area
```

Everything else in the root is config. Ignore it, and ask the Webmaster before
touching any of it — a broken config breaks the build for everyone.

**Which file do I work in?**

| I want to...                     | Edit this                                  |
| -------------------------------- | ------------------------------------------ |
| Change what a page says          | that list in `content/`                    |
| Change how a page looks          | that page's `page.tsx` + `page.module.css` |
| Change the navbar or footer      | `components/Navbar.tsx` / `Footer.tsx`     |
| Change something on _every_ page | `app/layout.tsx`                           |
| Change colors or fonts           | `app/globals.css`                          |
| Add a brand-new page             | new folder in `app/` with a `page.tsx`     |

**So we don't step on each other:**

- 🔒 **Shared files** — `app/layout.tsx`, `app/globals.css`, anything in
  `components/` — affect everyone. Ask before changing them.
- 🎨 **Page styles go in a CSS Module** (`page.module.css`) next to the page, never
  in `globals.css`. That way your styles can't leak onto someone else's page.
- 📦 **Import shared code with `@/`**, e.g. `import Navbar from "@/components/Navbar"`.
- ✅ **Run `pnpm format`, `pnpm lint`, and `pnpm typecheck` before you push.** CI
  runs the same three and will fail your PR if you skip them.

## 📋 Issues

The **[Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)** is our
to-do list, and it's how you know what everyone else is working on.

**Before you start anything: comment on the issue and assign yourself.** That's
the whole system — it's how two people avoid building the same page twice, and
how the rest of us can see who's on what without asking in Discord.

One issue → one branch → one PR. Don't bundle several together.

**Useful labels:**

| Label              | Means                                         |
| ------------------ | --------------------------------------------- |
| `good first issue` | Start here if it's your first time            |
| `content`          | Data entry only — no React needed             |
| `shared-file`      | Touches something everyone uses — check first |
| `blocker`          | Other people are waiting on this              |

No issue for your idea? Open one, or ask in Discord.

## 🔗 Resources

| What                   | Link                                                                                                      |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| 🎨 **Final designs**   | [Figma — Final Version](https://www.figma.com/design/07019PjaxQ3sWgH0dXuSCK/Sase-website?node-id=521-674) |
| ✏️ **Draft designs**   | [Figma — Draft](https://www.figma.com/design/07019PjaxQ3sWgH0dXuSCK/Sase-website?node-id=0-1)             |
| 📁 **Photos & assets** | [Google Drive](https://drive.google.com/drive/folders/1ZTxiOe26RPLd7_XP_3bpLmBrQPb1trzN?usp=drive_link)   |
| 🌐 **Live site**       | [sase-vt.org](https://sase-vt.org/)                                                                       |
| 📖 **Next.js docs**    | [nextjs.org/docs](https://nextjs.org/docs)                                                                |

**Build against the Final Version** — that's the target. You can also download
photos and assets straight from the **Draft** file.

If the design and this README disagree, **the design wins** — but tell the
Webmaster so the variable gets fixed rather than worked around.

## 💻 Commands

| Command             | What it does                        |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start the local server              |
| `pnpm build`        | Build for production (what CI runs) |
| `pnpm lint`         | Catch style problems and mistakes   |
| `pnpm format`       | Auto-format everything              |
| `pnpm format:check` | Check formatting, change nothing    |
| `pnpm typecheck`    | Check TypeScript types              |

## 🔒 Secrets

Never commit passwords, API keys, or tokens. Real secrets go in `.env.local`
(gitignored, stays on your machine) with a placeholder in `.env.example` so
everyone knows the variable exists.

## 🚢 Deployment

Merging to `main` auto-deploys to production. Domain is
[sase-vt.org](https://sase-vt.org/), registered on GoDaddy. **If something
breaks, tell the Webmaster immediately** so it can be rolled back.

---

Questions? Ask in the **SASE Web Dev Discord** — no question is too basic.
[CONTRIBUTING.md](./.github/CONTRIBUTING.md) is the short version of this page.

## Admin Setup (Webmaster only)

**Branch protection** — Settings → Branches → rule for `main`:

- Require a pull request before merging, with 1 approval
- Require the **`Lint & Build`** status check to pass
- Block direct pushes

**Auto-cleanup** — Settings → General → Pull Requests → enable **Automatically
delete head branches**.

Default reviewer lives in [`.github/CODEOWNERS`](./.github/CODEOWNERS).

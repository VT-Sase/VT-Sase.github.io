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
- [🚢 Deployment](#-deployment)
- [Admin Setup (Webmaster only)](#admin-setup-webmaster-only)

## 🚀 Getting Started

### 1. Install Node

Node is what lets your computer run JavaScript outside a browser. Next.js is built
on it, so nothing works without it.
-- you can ask ai to install node for you!! -- should be quick 

```bash
node --version    # should print v22.something
```

### 2. Download the code

```bash
git clone https://github.com/VT-Sase/vt-sase-website.git
cd vt-sase-website
```

### 3. Run it

```bash
npm run dev
```

Open **[localhost:3000](http://localhost:3000)**. 🎉

Leave that command running while you work — save a file and the page updates by
itself. Press **Ctrl+C** in the terminal to stop it.



## 🎨 Colors

Color schema 

Light	Dark (default)
#D1E7B0	#0D314B
#CCE792	#001727
#F0F7E0	#0D2333
#CFE7DC	#168AAD
#A5D8E6	#46A7C4
#D8F0F8	#9BE8FF
#001727	#FFFFFF
#1E6091	#00C4FF
#366D34	#8FC53F

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


##  How Git Works Here

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
- ✅ **Run `npm run format`, `npm run lint`, and `npm run typecheck` before you push.** CI
  runs the same three and will fail your PR if you skip them.

## 📋 Issues

The **[Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)** is our
to-do list, and it's how you know what everyone else is working on.

**Before you start anything: comment on the issue and assign yourself.** That's
the whole system — it's how two people avoid building the same page twice, and
how the rest of us can see who's on what without asking in Discord.

One issue → one branch → one PR. Don't bundle several together.


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


## 💻 Commands

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the local server              |
| `npm run build`        | Build for production (what CI runs) |
| `npm run lint`         | Catch style problems and mistakes   |
| `npm run format`       | Auto-format everything              |
| `npm run format:check` | Check formatting, change nothing    |
| `npm run typecheck`    | Check TypeScript types              |


## 🚢 Deployment

Merging to `main` auto-deploys to production. Domain is
[sase-vt.org](https://sase-vt.org/), registered on GoDaddy. **If something
breaks, tell the Webmaster immediately** so it can be rolled back.


Create GitHub labels, milestones, and issues in the repo **VT-Sase/vt-sase-website**.

Use the `gh` CLI or a GitHub connector/API, whichever you have available. I have write access to this repo. Do not create duplicates — if a label or milestone already exists, skip it and continue. Report the issue numbers you created at the end.

## Context (so the issues make sense)

It's a Virginia Tech student club website. Next.js 16 (App Router), React 19, TypeScript, plain CSS Modules (NOT Tailwind), pnpm. The project scaffolding is complete but every page is a stub that literally renders `<h1>Name</h1><p>TODO</p>`. A 4-person team is building it out in 2 weeks. Colors/fonts are placeholder CSS variables in `app/globals.css` and the site currently runs on the Arial fallback. There are data files at `content/officers.ts`, `content/events.ts`, `content/faqs.ts`, `content/sponsors.ts` holding typed lists, so text/data is separate from components.

## Step 1 — Labels

| Name | Color | Description |
|---|---|---|
| `good first issue` | `7057ff` | No prior experience with this repo needed |
| `content` | `0e8a16` | Filling in text/data only — no React required |
| `shared-file` | `d93f0b` | Touches globals.css, layout.tsx, or components/ — check with lead |
| `blocked-by-design` | `fbca04` | Waiting on something from the designers |
| `chore` | `cfd3d7` | Tooling, setup, or cleanup |

## Step 2 — Milestones

| Title | Due | Description |
|---|---|---|
| Setup | 2026-08-23 | Everyone running locally and through one PR |
| Build | 2026-08-30 | Pages built in parallel |
| Launch | 2026-09-03 | Polish, accessibility, domain |

## Step 3 — Issues

Create these 23 issues. Each row gives the title, milestone, labels, and body.

---

**1. Add the real colors and fonts from Figma** — Setup — `shared-file`, `blocked-by-design`

Swap the placeholder values in `app/globals.css` for the real palette, and load the real typefaces.

Right now the site runs on five guessed CSS variables and the Arial fallback — `next/font` is not used at all.

**Do this first, before anyone styles a section.** Everyone else reads these variables.

- [ ] Light and dark palettes defined as CSS variables on `:root`
- [ ] Spacing and type scale defined so pages have something to reference
- [ ] Fonts loaded via `next/font/google` in `app/layout.tsx`
- [ ] No page needs a hardcoded hex value to match the design

Blocked on: exact hex values and font names from the designers.

---

**2. Replace the placeholder page layout in globals.css** — Setup — `shared-file`

`app/globals.css` has a `main` rule that flex-centers everything vertically and horizontally. It exists only to make the empty skeletons look presentable, and it has to go before real sections land.

Replace it with a proper container: max-width, horizontal auto margin, consistent section padding.

This is the biggest merge-conflict risk in the project — it should land on day one, in the same PR as the colors if convenient.

---

**3. Navbar: mobile menu, socials, Join us button** — Setup — `shared-file`

`components/Navbar.tsx` has working active-link logic but no mobile menu — it just wraps onto a second line.

- [ ] Hamburger + drawer below the mobile breakpoint
- [ ] "Join us" button linking to the chapter Linktree
- [ ] Socials icon
- [ ] Keyboard accessible; closes on Escape and on navigation

---

**4. Footer: replace the TODO with real links** — Setup — `shared-file`

`components/Footer.tsx` renders a literal `TODO — socials + Linktree links` string that is visible on the live site right now.

Replace with Instagram, LinkedIn, Discord, email, and the Linktree.

---

**5. Confirm dark mode approach** — Setup — `shared-file`, `blocked-by-design`

The designers gave us light and dark for every page. Today the site follows the visitor's system setting via `@media (prefers-color-scheme: dark)` — there is no toggle on the page.

If we ship system-only (recommended for launch), this issue is just "check both themes look right on every page" and closes fast.

If the designers want a user-facing switch, it is a real change: move to a `data-theme` attribute on `<html>`, add `next-themes` or an inline anti-FOUC script, and rewrite the media query block in `globals.css`.

---

**6. Set up Vercel and preview deploys** — Setup — `chore`

Import the repo at vercel.com — Next.js is auto-detected, no config needed.

- [ ] Confirm a preview URL comments on a test PR
- [ ] Leave the custom domain until Launch

---

**7. Repo housekeeping: issue templates, typecheck, CI, content scaffolding** — Setup — `chore`

Tracking issue for the `chore/team-workflow-setup` branch.

- [x] Issue templates (page-section, bug, chore)
- [x] `pnpm typecheck` script + CI step
- [x] CI concurrency group and explicit permissions
- [x] `.nvmrc` pinned to Node 22
- [x] `content/` scaffolding with typed lists
- [x] README + CONTRIBUTING updated with the workflow

---

**8. Home: hero section** — Build — (no labels)

**Page:** Home · **Section:** Hero
**Figma frame:** _paste the link to the specific frame_

Club name, tagline, photo, and a "Join us" button linking to the Linktree.

- [ ] Matches the Figma at 1440px and 375px
- [ ] Colors and fonts come from `var(--token)` — no hardcoded hex
- [ ] Checked in both light and dark
- [ ] Images compressed, under 200 KB

---

**9. Home: What is SASE + Our Mission** — Build — (no labels)

**Page:** Home
**Figma frame:** _paste link_

Both About sections as they appear on the homepage in the design.

- [ ] Matches the Figma at 1440px and 375px
- [ ] Uses `var(--token)` for all colors and fonts
- [ ] Checked in both light and dark

---

**10. Home: FAQ accordion** — Build — (no labels)

**Page:** Home
**Figma frame:** _paste link_

Use native `<details>` / `<summary>`. That gives keyboard and screen-reader support for free with no JavaScript — the comment block in the page recommends this too.

Reads from `content/faqs.ts`. Ends with a "Still have questions?" line linking to socials.

---

**11. Home: sponsors strip** — Build — (no labels)

**Page:** Home
**Figma frame:** _paste link_

Reads from `content/sponsors.ts`. Logos link out. Greyscale-to-color on hover if the design shows it.

---

**12. Fill in content/officers.ts** — Build — `good first issue`, `content`

Type in the real board: name, role, committee, major, year, photo path, email, LinkedIn.

Committees are Leads / External / Internal / Media / Logistics / Web Dev.

No React needed — the file is a list of objects and the shape is defined at the top. **This is a great first pull request.**

Also needed:
- [ ] Headshots compressed to under 200 KB
- [ ] Originals in `public/images/original/`, compressed in `public/images/`

---

**13. OfficerCard component** — Build — (no labels)

**Page:** Officers
**Figma frame:** _paste link_

Photo, name, role, major/year, email and LinkedIn icons. Takes an `Officer` from `content/officers.ts`.

- [ ] Handles a missing email or LinkedIn without breaking the layout
- [ ] Uses `var(--token)` for all colors

---

**14. Officers page: committee-grouped grid** — Build — (no labels)

**Page:** Officers
**Figma frame:** _paste link_

Use the `officersByCommittee()` helper already in `content/officers.ts` — it returns groups in display order and skips empty committees, so adding a committee later is a data change, not a code change.

- [ ] Grid is responsive at 375 / 768 / 1440
- [ ] Committee headings match the design

---

**15. Fill in content/events.ts** — Build — `good first issue`, `content`

Add the semester's events: name, date, location, description, optional link.

Dates are ISO strings with a timezone offset, e.g. `2026-09-14T18:00:00-04:00`, so they sort correctly.

No React needed. **Good first pull request.**

---

**16. Events page: card list** — Build — (no labels)

**Page:** Events
**Figma frame:** _paste link_

Reads from the `upcomingEvents()` helper in `content/events.ts` — it filters out past events and sorts soonest-first.

- [ ] Handles the empty state (no upcoming events) gracefully
- [ ] Dates formatted for humans, not raw ISO

---

**17. Events page: calendar** — Build — (no labels)

**Page:** Events
**Figma frame:** _paste link_

Embed Google Calendar and style the container to match the design, unless the team decided otherwise at kickoff.

A custom month grid means writing date logic from scratch and is a multi-day job — check before going that route.

---

**18. Compress and commit all images** — Launch — `chore`, `good first issue`

Everything under 200 KB. Originals in `public/images/original/`, compressed versions in `public/images/`.

Use compressor.io or compress2go.

---

**19. Responsive pass on every page** — Launch — (no labels)

Check every page at 375, 768, and 1440 px.

- [ ] Nothing overflows sideways
- [ ] Nothing overlaps
- [ ] Tap targets are reachable on a phone
- [ ] Navbar mobile menu works on a real device, not just DevTools

---

**20. Accessibility pass** — Launch — (no labels)

- [ ] Alt text on every image
- [ ] Contrast checked in both light and dark
- [ ] Full keyboard navigation, visible focus states
- [ ] Headings in order, no skipped levels
- [ ] Every link makes sense out of context (no bare "click here")

---

**21. SEO metadata, favicon, and social preview image** — Launch — (no labels)

`app/layout.tsx` currently sets only `title: "VT SASE"`.

- [ ] Description
- [ ] Open Graph tags
- [ ] Social preview image
- [ ] Favicon

---

**22. Point sase-vt.org at the new site** — Launch — `chore`

DNS is at GoDaddy. Do this last, once everything is green on the preview URL.

---

**23. Add a dark mode toggle** — (no milestone) — (no labels)

Post-launch. The site currently follows the visitor's system setting only.

A user-facing switch means moving to a `data-theme` attribute on `<html>`, adding `next-themes` or an inline anti-FOUC script, and rewriting the media query block in `app/globals.css`.

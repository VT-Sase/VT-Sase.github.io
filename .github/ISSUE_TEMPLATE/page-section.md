---
name: Page section
about: Build one section of a page from the Figma design
title: "[Page] Section name"
labels: ""
assignees: ""
---

## What to build

<!-- Which page, which section. One section per issue. -->

**Page:** <!-- e.g. Home -->
**Section:** <!-- e.g. Hero -->
**Figma frame:** <!-- paste the link to the specific frame, not the whole file -->

## Notes

<!-- Anything the design doesn't make obvious: copy text, link targets,
     what happens on mobile, which images are needed. -->

## Files you'll touch

<!-- Usually just these two. If you need to change a shared file
     (app/globals.css, app/layout.tsx, components/), say so here and
     check with the lead first. -->

- `app/.../page.tsx`
- `app/.../page.module.css`

## Done when

- [ ] Matches the Figma at desktop (1440px) and mobile (375px)
- [ ] Colors and fonts come from `var(--token)` — no hardcoded hex values
- [ ] Checked in both light and dark mode
- [ ] Images are compressed and under 200 KB
- [ ] No errors in the browser console
- [ ] `pnpm lint` and `pnpm format` run clean before pushing

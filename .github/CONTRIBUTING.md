# Contributing to the VT SASE Website

Welcome to the Web Dev Committee! 🎉

**👉 The [README](../README.md) is the main guide.** It covers setup, the git
workflow, where every file lives, and the ground rules. Read that first — this
page is just the short version.

## The short version

1. **Pick an issue** from the [Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)
   and assign yourself. Filter by `good first issue` if it's your first time.
2. **Branch off `main`** — `feature/`, `fix/`, or `update/` (see
   [Branch Naming](../README.md#branch-naming)).
3. **Run the checks before you push.** Nothing runs them automatically, so this
   is on you:
   ```bash
   npm run format     # auto-format with Prettier
   npm run lint       # catch style problems and common mistakes
   npm run typecheck  # catch TypeScript errors
   ```
4. **Open a PR into `main`**, add screenshots for anything visual, and post it
   in Discord. The Webmaster reviews and merges — nothing else for you to do.

## The three rules people forget

- **Never push directly to `main`.** Everything goes through a PR.
- **Never hardcode a hex value.** Use `var(--foreground)`, not `#fff` — hardcoded
  colors break dark mode.
- **Never commit secrets.** They go in `.env.local` (gitignored), with a
  placeholder in `.env.example`.

## Changing a shared file?

`app/layout.tsx`, `app/globals.css`, and anything in `components/` affects
everyone's pages. Check with the Webmaster **before** you start, not after
you've written it.

## Questions?

**No question is too basic** — everyone here is still learning. Ask in the SASE
Web Dev **Discord**, or reach out to the current Webmaster. We'd rather answer a
question than have you stuck. 💜

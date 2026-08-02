# Contributing to the VT SASE Website

Welcome to the Web Dev Committee! 🎉 This guide covers the essentials. For full
setup and the step-by-step git workflow, see the [README](./README.md).

## How to pick something to work on

- Check the **[Issues tab](https://github.com/VT-Sase/vt-sase-website/issues)** on GitHub — that's our to-do list.
- Comment on an issue to say you're taking it, so two people don't do the same work.
- No open issue for your idea? Open one first, or ask in the Discord.

## Code style

- Run `pnpm lint` before you push. Fix anything it flags.
- Run `pnpm format` to auto-format your code with Prettier.
- Match the style of the code around you — consistency keeps the site easy to maintain.

## Pull Request etiquette

- **Keep changes small.** One feature or fix per PR is much easier to review than a giant one.
- **Describe what you did** in the PR (the template will prompt you). Add screenshots for any visual change.
- **Never push directly to `main`.** All changes go through a Pull Request and need 1 approval.
- Wait for CI (the automated checks) to pass ✅ before merging.

## Security — don't commit secrets

- Never commit passwords, API keys, tokens, or other secrets.
- Real secrets go in a local `.env.local` file (which is gitignored). Add a
  placeholder to `.env.example` so others know it exists.

## Questions?

**No question is too basic** — everyone here is still learning. Ask in the SASE
Web Dev **Discord** server, or reach out to the current Webmaster. We'd rather
answer a question than have you stuck. 💜

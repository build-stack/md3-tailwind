## Tooling / Tech Stack

Progress key: [ ] not started, [x] done, [-] in progress

### Root (monorepo) tooling
- [x] Storybook 8 (Vite)
  - [x] `@storybook/react-vite`
  - [x] `@storybook/addon-essentials`
  - [x] `@storybook/addon-a11y`
  - [x] `@storybook/addon-interactions`
  - [x] `@storybook/test`
- [ ] Testing (unit + a11y)
  - [ ] `vitest`
  - [ ] `@testing-library/react`
  - [ ] `@testing-library/user-event`
  - [ ] `@testing-library/jest-dom`
  - [ ] `vitest-axe` (or `jest-axe`)
- [ ] E2E / visual
  - [ ] `@playwright/test` (visual diffs optional)
  - [ ] (optional) Chromatic for Storybook snapshots
- [ ] Lint / format
  - [ ] `eslint` + `@typescript-eslint/*`
  - [ ] `eslint-plugin-react-hooks`
  - [ ] `eslint-plugin-jsx-a11y`
  - [ ] `prettier`
  - [ ] `lint-staged` + `simple-git-hooks` (or Husky)
- [ ] Build / types / coverage
  - [x] `typescript`
  - [x] `tsup`
  - [ ] `c8` (coverage)
- [ ] Tailwind v4 toolchain
  - [x] `tailwindcss`
  - [x] `@tailwindcss/postcss`
  - [x] `postcss`
- [ ] Versioning / release
  - [x] `@changesets/cli`
  - [ ] size budgets: `size-limit` (or `pkg-size`) and CI check

Notes
- Keep these in root devDependencies; packages rely on the root toolchain.

### Package (`@build-stack/md3-tailwind`)
- [x] Minimal TS build with `tsup`
- [ ] (optional) CSS lint: `stylelint` + `stylelint-config-standard` for `tokens.css`/`utilities.css`
- [x] No JS motion runtime; use CSS tokens for durations/easings

### (Removed) React wrapper package
Consolidated into the single package above.

- ### Docs & examples
- [ ] Storybook setup
  - [x] Load Tailwind v4 PostCSS in preview
  - [x] Import `tokens.css`/`utilities.css`
  - [ ] Global toolbar: theme (light/dark) and density toggles
  - [x] A11y addon enabled
- [ ] Example app(s)
  - [ ] Vite React app for manual QA (light/dark, density, RTL toggles)

### CI/CD
- [x] Main-only publish via Release workflow (Changesets Action)
- [ ] Cache installs/builds; upload artifacts on failures
- [ ] (optional) Canary workflow on `develop` with `next` dist-tag

### Decisions / guidelines
- [ ] Keep free package lightweight and tree-shakeable
- [ ] Add heavier deps (data grid, advanced overlays, complex motion) to Pro or make optional peers

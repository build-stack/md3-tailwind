## Essentials (Phase 1 Prerequisites)

Progress key: [ ] not started, [x] done, [-] in progress

### Tailwind v4 foundation
- [ ] Expand `@theme` tokens: full color roles (incl. state layers), full typography scale, radius, elevation, spacing, motion, density
- [ ] Utilities: elevation classes, focus-ring, state-layer, full typography utilities, disabled/pressed states
- [ ] Light/dark schemes and density variables defined

### Theming infra
- [ ] `ThemeProvider` that scopes theme via class/data-attr and supports light/dark/density
- [ ] Document overriding tokens via CSS and per-scope theming

### Component scaffolding conventions
- [ ] Shared `cn()` util and polymorphic `as` type helper
- [ ] Slots convention (startIcon/endIcon), `data-state` attributes, `size`/`variant` enums
- [ ] Package exports map per component, `sideEffects: false`, CSS entries stable

### Accessibility and interaction primitives
- [ ] Focus styles meeting WCAG; visible on keyboard only
- [ ] `VisuallyHidden` primitive
- [ ] Ripple decision: start with CSS state-layer (no JS ripple), revisit later

### Tooling / DX
- [ ] Testing setup: Vitest + RTL + jest-dom + axe
- [ ] Storybook configured (Tailwind v4 PostCSS in preview), tokens loaded
- [ ] Linting/formatting: eslint (TS/React 19), prettier, pre-commit hook
- [ ] Example app (Vite) wired with Tailwind v4 and tokens for manual QA

### CI/CD and versioning
- [ ] Main-only releases via Changesets (develop does not publish)
- [ ] Changesets configured for versioning; canary workflow optional (later)

### Docs stubs
- [ ] Per-component README template: usage, props, a11y notes, theming hooks
- [ ] Theming guide: extend/override tokens, dark mode, density

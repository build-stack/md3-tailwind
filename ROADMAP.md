## Roadmap

Progress key: [ ] not started, [x] done, [-] in progress

### Scope and goals
- [ ] Deliver a comprehensive, accessible MD3 React suite on Tailwind v4.1+
- [ ] Keep split: `@build-stack/md3-tailwind-core` (tokens/primitives) and `@build-stack/md3-tailwind` (wrappers)
- [ ] Prepare for a private Pro package via GitHub Packages

### Cross-cutting requirements
- [ ] WCAG 2.1 AA, WAI-ARIA, keyboard support throughout
- [ ] Focus ring, roving tabindex, focus trap and portals for overlays
- [ ] Theming via CSS variables, light/dark, density, motion
- [ ] Tailwind v4 CSS-first `@theme` tokens + documented override patterns
- [ ] API patterns: polymorphic `as`, `className`/`style`, slots, variants, sizes
- [ ] Controlled/uncontrolled inputs; consistent `onChange` semantics
- [ ] Data/state attributes for styling (`data-variant`, `data-state`, `aria-*`)
- [ ] TypeScript strict types, stable public types
- [ ] Packaging: ESM + CJS, exports map, `sideEffects: false`, CSS entries
- [ ] RSC/SSR friendly (avoid server-only side effects)
- [ ] Performance: tree-shaking, memoization where needed, lazy portals
- [ ] Testing: unit (Vitest + RTL), a11y (axe), E2E (Playwright)
- [ ] Tooling: Storybook, visual regression, lint/format pre-commit
- [ ] Docs: usage, props, theming guide, a11y notes, examples
- [ ] CI/CD: Changesets-driven versioning and releases

## Foundations (Core)

### Design tokens (CSS `@theme`)
- [ ] Color roles: primary/secondary/tertiary/error/surface/outline + on-* tokens
- [ ] Surface variants and state layer colors
- [ ] Typography scale: display/headline/title/label/body
- [ ] Spacing scale
- [ ] Radius/border tokens
- [ ] Elevation/shadows
- [ ] Z-index scale
- [ ] Motion: durations/easings, reduced-motion support
- [ ] Opacity tokens
- [ ] Density scale (comfortable/compact)
- [ ] Light and dark schemes (system + class toggle)

### Utilities
- [ ] Text utilities (e.g., `.text-display-lg`, etc.)
- [ ] Elevation utilities/classes
- [ ] State layer utilities
- [ ] Focus ring utility
- [ ] Examples + docs for extending utilities

### Theme switching
- [ ] CSS variable sets per theme
- [ ] `<ThemeProvider>` that scopes a theme class
- [ ] System vs app-driven dark mode
- [ ] Density switch mechanism

## Component architecture
- [ ] Variants model (filled/outlined/tonal/elevated/text) reusable across components
- [ ] Size model (sm/md/lg) with density-aware spacing
- [ ] State handling (hover/focus/active/disabled/pressed/selected/checked)
- [ ] Icon slots (start/end), loading pattern
- [ ] Composition: unstyled slots + Tailwind classes, `className` escape hatch

## Component roadmap (phased)

### Phase 1: Essentials
- [ ] Button (all MD3 variants)
- [ ] IconButton
- [ ] FAB
- [ ] Typography primitives (Display/Headline/Title/Body/Label)
- [ ] Card (elevated/outlined)
- [ ] Chip (assist/filter/input/suggestion)

### Phase 2: Inputs
- [ ] TextField (filled/outlined)
- [ ] TextArea
- [ ] Select (native first)
- [ ] Checkbox
- [ ] Radio
- [ ] Switch
- [ ] Slider

### Phase 3: Navigation/Layout
- [ ] App Bar (top)
- [ ] Navigation Bar (bottom)
- [ ] Navigation Drawer (modal/standard)
- [ ] Tabs
- [ ] Toolbar
- [ ] Breadcrumbs
- [ ] Container/Grid primitives
- [ ] List/ListItem

### Phase 4: Feedback/Overlay
- [ ] Dialog (modal/sheet)
- [ ] Menu
- [ ] Tooltip
- [ ] Snackbar/Toast
- [ ] Progress (linear/circular)
- [ ] Skeleton

### Phase 5: Data Display
- [ ] Avatar
- [ ] Badge
- [ ] Table (basic)
- [ ] Divider

### Phase 6: Accessibility hardening
- [ ] Keyboard specs validated across components
- [ ] ARIA patterns validated
- [ ] Focus management (trap/return) validated
- [ ] Screen reader testing

### Phase 7: Pro (separate private repo/package)
- [ ] Create private repo `md3-tailwind-pro`
- [ ] Configure GitHub Packages publishing
- [ ] DataGrid
- [ ] Date/Time pickers
- [ ] Autocomplete/Combobox
- [ ] Rich text editor
- [ ] TreeView
- [ ] Advanced Table features
- [ ] Licensing + access workflows

## Theming and customization
- [ ] Public CSS variable contract per component documented
- [ ] Variant/size token mapping tables
- [ ] Override workflow docs (`@theme` → utilities → `className`/slot overrides)
- [ ] Brand theme example (light/dark + density)
- [ ] Reduced-motion support documented

## DX and docs
- [ ] Storybook with Controls and a11y addon
- [ ] Examples (Vite + Next) with Tailwind v4 setup
- [ ] Tokens override examples
- [ ] Contribution guide, issue templates, codeowners
- [ ] Migration/versioning docs (Changesets)

## Quality gates
- [ ] Lint/typecheck/build required in CI
- [ ] Test coverage thresholds for core components
- [ ] Bundle-size budgets per package
- [ ] A11y checks pass for core interactive components

## Releases & versioning
- [ ] Changesets configured and used for every change
- [ ] Release workflow (CI) green and reproducible
- [ ] Canary pre-releases process defined (optional)

## Milestones
- [ ] M0 Foundations (tokens/utilities/ThemeProvider + docs/examples/tests)
- [ ] M1 Essentials (Buttons/Typography/Card/Chip complete with a11y + docs)
- [ ] M2 Inputs batch completed
- [ ] M3 Navigation/Layout batch completed
- [ ] M4 Overlays/Feedback batch completed
- [ ] M5 Data Display basics completed
- [ ] M6 Hardening (a11y/perf/docs)
- [ ] M7 Pro seed (private package published + client guide)

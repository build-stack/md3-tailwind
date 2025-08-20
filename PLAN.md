## MD3 Tailwind Monorepo Plan (Turborepo + Changesets + Tailwind v4.1+)

### Objectives
- **Create a single publishable package**: `@build-stack/md3-tailwind` (Components Library + CSS assets).
- **Adopt PNPM 9, Node 20, Turborepo, and Changesets** with automated releases via GitHub Actions.
- **Target Tailwind v4.1+** and React 19 peer deps.
- **Keep current packages (`packages/react`, `packages/html`) as-is** for now, without publishing them.

### Decisions (confirmed)
- **Existing packages**: keep as-is for the moment.
- **React version**: React 19 for peer deps.
- **Tailwind**: v4.1+.
- **Releases**: use the official Changesets GitHub Action.
- **Engines**: Node 20.x, PNPM 9.x.
- **Publishing**: npm scope `@build-stack/*`; `NPM_TOKEN` secret available in GitHub.

### Note on Changesets package name (context for Q4)
- The correct package to install is **`@changesets/cli`** (scoped package). The unscoped name `changesets` is not the official CLI and will not provide the expected commands (`changeset`, `changeset version`, `changeset publish`). We’ll depend on `@changesets/cli` at the root.

---

## Milestones & Tasks

### 0) Repo preparation
- [x] Add root configs/files:
  - [x] `package.json` (private workspace root; scripts delegate to Turbo and Changesets)
  - [x] `pnpm-workspace.yaml` (only `packages/*`)
  - [x] `turbo.json` (build/test/lint pipelines; `build` outputs `dist/**`)
  - [x] `tsconfig.base.json` (strict TS base)
  - [x] `.github/workflows/release.yml` (Changesets Action)
  - [x] `.gitignore` (add: `dist/`, `.turbo/`, `.changeset/`)
  - [ ] Optional: `.npmrc` (e.g., `auto-install-peers=false`, `strict-peer-dependencies=false`)
- [x] Remove legacy/out-of-scope packages and assets (old `react`, `html`, `create-build-stack`, etc.).

Root `package.json` (reference)
```json
{
  "name": "md3-tailwind-root",
  "private": true,
  "packageManager": "pnpm@9",
  "engines": { "node": ">=20", "pnpm": ">=9" },
  "scripts": {
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "changeset publish"
  },
  "devDependencies": {
    "turbo": "^2.0.0",
    "@changesets/cli": "^2.27.0",
    "typescript": "^5.4.0"
  }
}
```

`pnpm-workspace.yaml`
```yaml
packages:
  - "packages/*"
```

`turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": { "outputs": ["dist/**"] },
    "lint": {},
    "test": {}
  }
}
```

`tsconfig.base.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "declaration": true
  }
}
```

### 1) Tooling install & initialization
- [x] Switch to PNPM at the root (`packageManager: pnpm@9`).
- [x] Install root dev deps: `turbo`, `@changesets/cli`, `typescript`.
- [x] Initialize Changesets: `pnpm dlx changeset init` → creates `.changeset/`.
  - [x] Configure `.changeset/config.json` with `baseBranch: "main"` and `access: "public"`.
- [x] Commit baseline.

### 2) Create package: `@build-stack/md3-tailwind`
- [x] Add `packages/md3-tailwind-core/package.json`:
  - **type**: `module`
  - **exports**: main/module/types + `./tokens.css` and `./utilities.css` (CSS-first v4.1)
  - **peerDependencies**: `react@^19`, `react-dom@^19`, `tailwindcss@^4.1.0`
  - **devDependencies**: `tsup`, `typescript`, `@types/react`, `@types/react-dom`
  - **scripts**: `build` via tsup, plus `lint`/`test` placeholders
- [x] Add `packages/md3-tailwind-core/tsconfig.json` extending root base.
- [x] Add source files:
  - [x] `src/index.ts` (export primitives only)
  - [x] `src/typography/Display.tsx`
  - [x] `src/typography/Body.tsx`
  - [x] `tokens.css` (Tailwind v4.1 `@theme` tokens)
  - [x] `utilities.css` (CSS utilities that consume tokens)
- [x] Build: `pnpm --filter @build-stack/md3-tailwind build` → verify `dist/` emits `*.mjs`, `*.cjs`, `*.d.ts`.

Package `package.json` (reference)
```json
{
  "name": "@build-stack/md3-tailwind",
  "version": "0.0.0",
  "private": false,
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.mjs", "require": "./dist/index.cjs" },
    "./tokens.css": { "default": "./tokens.css" },
    "./utilities.css": { "default": "./utilities.css" }
  },
  "files": ["dist", "tokens.css", "utilities.css", "README.md"],
  "sideEffects": false,
  "publishConfig": { "access": "public" },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.1.0"
  },
  "devDependencies": { "tsup": "^8.0.0", "typescript": "^5.4.0", "@types/react": "^19", "@types/react-dom": "^19" },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "lint": "echo skip",
    "test": "echo skip"
  }
}
```

-### 3) Create package: `@build-stack/md3-tailwind` (FREE wrappers)
- [x] Add `packages/md3-tailwind/package.json`:
  - **dependencies**: `@build-stack/md3-tailwind@0.0.0`
  - **peerDependencies**: `react@^19`, `react-dom@^19`, `tailwindcss@^4.1.0`
  - **devDependencies**: `tsup`, `typescript`
  - **scripts**: `build` via tsup
- [x] Add `packages/md3-tailwind/tsconfig.json` extending root base.
- [x] Add `src/index.ts` re-exporting selected primitives from core; add any thin wrappers.
- [x] Build: `pnpm --filter @build-stack/md3-tailwind build`.

Package `package.json` (reference)
```json
{
  "name": "@build-stack/md3-tailwind",
  "version": "0.0.0",
  "private": false,
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "publishConfig": { "access": "public" },
  "dependencies": { "@build-stack/md3-tailwind": "0.0.0" },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.1.0"
  },
  "devDependencies": { "tsup": "^8.0.0", "typescript": "^5.4.0" },
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts",
    "lint": "echo skip",
    "test": "echo skip"
  }
}
```

### 4) Release automation (GitHub Actions)
- [x] Add `.github/workflows/release.yml` with `changesets/action`:
```yaml
name: Release
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  release:
    permissions: { contents: write, id-token: write }
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
          registry-url: https://registry.npmjs.org
      - run: pnpm install --frozen-lockfile
      - name: Create Release Pull Request or Publish to npm
        uses: changesets/action@v1
        with:
          publish: pnpm release
          version: pnpm version-packages
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```
- [x] Flow: merge to `main` → Action opens/updates a version PR → merging the version PR publishes the packages.

### 5) Verification & QA
- [x] `pnpm install`
- [ ] `pnpm build` (Turbo builds the package; `dist/**` present)
- [ ] Smoke-test Tailwind v4.1 tokens locally (minimal consumer):
  - [ ] Create `postcss.config.mjs` with `@tailwindcss/postcss` plugin.
  - [ ] In CSS entry, `@import "tailwindcss"; @import "@build-stack/md3-tailwind/tokens.css"; @import "@build-stack/md3-tailwind/utilities.css";` and verify `.text-display-lg` and token-driven styles.
  - [ ] Confirm React 19 type compatibility.
- [ ] Add initial Changeset for `0.0.1` release of the package.

### 6) Legacy packages
- [x] Removed old `packages/react`, `packages/html`, and `packages/create-build-stack` along with related workflows/configs.
- [ ] Future (optional): migrate useful code into `md3-tailwind-core` primitives/wrappers.

### 7) Risks & mitigations
- **Tailwind v4 CSS-first theming**: Ensure consumers have the Tailwind v4 PostCSS pipeline so `@import "tailwindcss"` and `@theme` work. Provide clear README instructions.
- **React 19-only peers**: Locks out React 18 users. This is intentional per decision; document requirement clearly in READMEs.
- **Release flow**: Ensure `NPM_TOKEN` has `publish` rights for `@build-stack/*`. Test by running the workflow on a dry-run branch, or publish a canary tag if desired.

### 8) Deliverables
- Root: `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `tsconfig.base.json`, `.github/workflows/release.yml`.
- Packages: `packages/md3-tailwind-core` and `packages/md3-tailwind` with buildable `dist/**`.
- Initial Changeset and semantic versions published via the Action.

---

## Execution order (concise)
1) Add root configs; install root dev deps; init Changesets. [Done]
2) Scaffold `md3-tailwind-core`; implement minimal primitives + tokens.css/utilities.css; build. [Done]
3) Scaffold `md3-tailwind`; re-export from core; build. [Done]
4) Wire GitHub Action; add initial Changeset; push to `main`. [Workflow added; pending first changeset]
5) Verify version PR creation and publish on merge. [Pending]



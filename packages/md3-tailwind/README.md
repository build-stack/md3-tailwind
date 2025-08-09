# @build-stack/md3-tailwind

Thin wrapper that re-exports curated components from `@build-stack/md3-tailwind-core`.

## Install

```bash
npm install @build-stack/md3-tailwind
# Tailwind v4 runtime (build-time) deps
npm install -D tailwindcss @tailwindcss/postcss postcss
```

## Tailwind v4 setup

Add the PostCSS plugin in your project's `postcss.config.*`:

```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

Import Tailwind and the MD3 tokens/utilities in your app CSS (e.g. `src/index.css`):

```css
@import "tailwindcss";
@import "@build-stack/md3-tailwind-core/tokens.css";
@import "@build-stack/md3-tailwind-core/utilities.css"; /* optional utilities like .text-display-lg */
```

## Usage (React)

```tsx
import { Display, Body } from "@build-stack/md3-tailwind";

export default function App() {
  return (
    <main className="p-6">
      <Display size="large">Headline</Display>
      <Body size="medium" className="text-gray-600">Body text</Body>
    </main>
  );
}
```

## Notes
- Packages expose CSS via `tokens.css` and optional utilities via `utilities.css`.
- React 19 and Tailwind 4.1+ are peer dependencies.

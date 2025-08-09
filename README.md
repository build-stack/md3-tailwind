MD3 Tailwind (React + Tailwind CSS v4)

Minimal Material Design 3 primitives for React 19, built on Tailwind CSS v4.1+ with CSS-first theming.

Install

```bash
npm install @build-stack/md3-tailwind
# Tailwind v4 runtime (build-time) deps
npm install -D tailwindcss @tailwindcss/postcss postcss
```

Peer dependencies

- react ^19 and react-dom ^19
- Tailwind CSS v4.1+ via PostCSS plugin

Tailwind setup (v4)

1) Add the Tailwind PostCSS plugin in `postcss.config.mjs`:

```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

2) Import Tailwind and the MD3 tokens in your app CSS (e.g., `src/index.css`):

```css
@import "tailwindcss";
@import "@build-stack/md3-tailwind-core/tokens.css";
@import "@build-stack/md3-tailwind-core/utilities.css"; /* optional utilities like .text-display-lg */
```

Usage (React)

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

Notes

- CSS-first theming: tokens are defined with `@theme` and consumed via utilities.
- Consumers manage React and Tailwind versions (kept as peer dependencies).



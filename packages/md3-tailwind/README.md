# @build-stack/md3-tailwind

Core tokens, utilities, and minimal primitives for MD3 on Tailwind CSS v4.1+ and React 19.

## Install

```bash
npm install @build-stack/md3-tailwind
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
@import "@build-stack/md3-tailwind/tokens.css";
@import "@build-stack/md3-tailwind/utilities.css"; /* optional utilities like .text-display-lg */
```

## Usage (React)

```tsx
import { Display, Body } from "@build-stack/md3-tailwind";

export default function Example() {
  return (
    <main className="p-6">
      <Display size="large">Headline</Display>
      <Body size="medium" className="text-gray-600">Body text</Body>
    </main>
  );
}
```

## Notes
- CSS-first theming with Tailwind v4 `@theme` tokens.
- React 19 and Tailwind 4.1+ are peer dependencies.

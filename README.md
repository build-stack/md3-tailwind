<a href="https://github.com/build-stack/md3-tailwind">
    <h1 align="center">MD3 Tailwind</h1>
</a>
</br>
<p align="center">
  <a href="https://github.com/build-stack/md3-tailwind/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/build-stack/md3-tailwind" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@build-stack/md3-tailwind">
    <img src="https://img.shields.io/npm/dt/@build-stack/md3-tailwind.svg" alt="Total Downloads">
  </a>
  <a href="https://github.com/build-stack/md3-tailwind/releases">
    <img src="https://img.shields.io/github/v/release/build-stack/md3-tailwind" alt="Version" />
  </a>
</p>

<p align="center">
  Minimal Material Design 3 primitives for React 19, built on Tailwind CSS v4.1+ with CSS-first theming.
</p>

<br />
<br />

## @build-stack/md3-tailwind

### Documentation

Visit our [documentation](#) for full guides and API reference.

<br />

### Components

<table>
  <tr>
    <td width="33.3333%">Button</td>
    <td width="33.3333%">Checkbox</td>
    <td width="33.3333%">Radio</td>
  </tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="#button">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Button Component
        </div>
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="#checkbox">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Checkbox Component
        </div>
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="#radio">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Radio Component
        </div>
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Switch</td>
    <td width="33.3333%">TextField</td>
    <td width="33.3333%">Typography</td>
  </tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="#switch">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Switch Component
        </div>
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="#textfield">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          TextField Component
        </div>
      </a>
    </td>
    <td width="33.3333%" style="padding: 0;">
      <a href="#typography">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Typography Component
        </div>
      </a>
    </td>
  </tr>
  <tr>
    <td width="33.3333%">Icon</td>
    <td width="33.3333%"></td>
    <td width="33.3333%"></td>
  </tr>
  <tr>
    <td width="33.3333%" style="padding: 0;">
      <a href="#icon">
        <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 8px;">
          Icon Component
        </div>
      </a>
    </td>
    <td width="33.3333%"></td>
    <td width="33.3333%"></td>
  </tr>
</table>

<br />

### Getting Started

Learn how to use @build-stack/md3-tailwind components to quickly and easily create elegant and flexible pages using Material Design 3 and Tailwind CSS v4.

@build-stack/md3-tailwind is working with Tailwind CSS v4.1+ and you need to have Tailwind CSS installed on your project - <a href="https://tailwindcss.com/docs/installation" target="_blank">Tailwind CSS Installation.</a>

<br />

1. Install `@build-stack/md3-tailwind`.

```bash
npm install @build-stack/md3-tailwind
# Tailwind v4 runtime (build-time) deps
npm install -D tailwindcss @tailwindcss/postcss postcss
```

<br />

2. Add the Tailwind PostCSS plugin in `postcss.config.mjs`:

```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

<br />

3. Import Tailwind and the MD3 tokens in your app CSS (e.g., `src/index.css`):

```css
@import "tailwindcss";
@import "@build-stack/md3-tailwind-core/tokens.css";
@import "@build-stack/md3-tailwind-core/utilities.css"; /* optional utilities like .text-display-lg */
```

<br />

4. Congratulations 🥳, you did it, now you're ready to use @build-stack/md3-tailwind.

```tsx
import { Button, Display, Body } from "@build-stack/md3-tailwind";

export default function Example() {
  return (
    <main className="p-6">
      <Display size="large">Material Design 3</Display>
      <Body size="medium" className="text-gray-600">
        Built with Tailwind CSS v4 and CSS-first theming
      </Body>
      <Button variant="filled">Get Started</Button>
    </main>
  );
}
```

<br />

## Features

- 🎨 **Material Design 3** - Following the latest Material Design guidelines
- ⚡ **Tailwind CSS v4** - Built on the latest Tailwind CSS with CSS-first theming
- 🔧 **TypeScript** - Fully typed components with excellent IntelliSense
- 🎯 **Minimal** - Lightweight primitives that don't get in your way
- 🚀 **React 19** - Built for the latest React with modern patterns
- 📦 **Tree-shakable** - Import only what you need
- 🎨 **CSS-first theming** - Tokens defined with `@theme` and consumed via utilities

<br />

## Community

We're excited to see the community adopt MD3 Tailwind, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!

- [GitHub Issues](https://github.com/build-stack/md3-tailwind/issues)
- [GitHub Discussions](https://github.com/build-stack/md3-tailwind/discussions)

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `CODE_OF_CONDUCT.md`.

## License

[MIT](https://github.com/build-stack/md3-tailwind/blob/main/LICENSE)
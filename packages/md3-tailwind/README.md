# @build-stack/md3-tailwind

Minimal Material Design 3 primitives for React 19, built on Tailwind CSS v4.1+ with CSS-first theming.

## Installation

```bash
npm install @build-stack/md3-tailwind
npm install -D tailwindcss @tailwindcss/postcss postcss
```

## Setup

### 1. Configure PostCSS

Add the Tailwind PostCSS plugin in your project's `postcss.config.mjs`:

```js
export default { 
  plugins: { 
    "@tailwindcss/postcss": {} 
  } 
};
```

### 2. Import Styles

Choose the approach that best fits your project:

#### Option A: Standalone Bundle (Recommended for most projects)

Import the pre-compiled CSS bundle that includes all necessary styles:

```css
/* app/globals.css or src/index.css */
@import "tailwindcss";
@import "@build-stack/md3-tailwind/styles.css";
```

#### Option B: Source Scanning (For monorepo development)

For development in monorepos where you want live updates without rebuilding:

```css
/* app/globals.css or src/index.css */
@import "tailwindcss";

/* Scan component library source files for classes (development) */
@source "../path/to/md3-tailwind/src/**/*";
```

## Usage

### Components

```tsx
import { Button, Display, Body, TextField, Checkbox } from "@build-stack/md3-tailwind";

export default function Example() {
  return (
    <main className="p-6 space-y-4">
      <Display size="large">Material Design 3</Display>
      <Body size="medium" className="text-gray-600">
        Built with Tailwind CSS v4 and CSS-first theming
      </Body>
      
      <div className="space-x-2">
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      
      <TextField label="Email" placeholder="Enter your email" />
      
      <Checkbox label="I agree to the terms" />
    </main>
  );
}
```

### Available Components

- **Button** - Material Design buttons with multiple variants
- **TextField** - Input fields with Material Design styling
- **Checkbox** - Checkbox inputs with proper states
- **Radio** - Radio button inputs
- **Switch** - Toggle switch components
- **Typography** - `Display` and `Body` text components
- **Icon** - Material Symbols icon component

### Button Variants

```tsx
<Button variant="elevated">Elevated</Button>
<Button variant="filled">Filled</Button>
<Button variant="tonal">Tonal</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
```

### Typography

```tsx
<Display size="large">Large Display</Display>
<Display size="medium">Medium Display</Display>
<Display size="small">Small Display</Display>

<Body size="large">Large Body</Body>
<Body size="medium">Medium Body</Body>
<Body size="small">Small Body</Body>
```



## Development

When developing component libraries or in monorepos, use the `@source` directive approach for the best development experience with live class scanning.

For production builds or external projects, use the standalone CSS bundle for maximum compatibility.

## Requirements

- **React 19+** (peer dependency)
- **Tailwind CSS v4.1+** (peer dependency)
- **TypeScript** (recommended)

## Notes

- Built with standard Tailwind CSS classes for maximum compatibility
- All components are fully typed with TypeScript
- Components use `class-variance-authority` for variant management
- Built with accessibility in mind following Material Design guidelines

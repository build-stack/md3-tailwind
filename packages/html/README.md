# @build-stack/html

A modern Material Design 3 HTML components library built with Tailwind CSS for vanilla JavaScript projects.

## Installation

```bash
npm install @build-stack/html
```

## Quick Start

### Option 1: Use Pre-compiled CSS
```html
<link href="node_modules/@build-stack/html/dist/css/build-stack.css" rel="stylesheet">
<script src="node_modules/@build-stack/html/dist/js/build-stack.js"></script>
```

### Option 2: Integrate with Tailwind Build
```js
// tailwind.config.js
const withBS = require('@build-stack/html/utils/withBS');

module.exports = withBS({
  content: ["./src/**/*.html"],
});
```

## Usage

```html
<div class="bs-card">
  <div class="bs-card-body">
    <h3>Material Design 3 Card</h3>
    <button class="bs-button bs-button-filled">Click me</button>
  </div>
</div>
```

## Documentation

Visit [build-stack.dev](https://build-stack.dev) for full documentation.
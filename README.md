# Build Stack's MD3 Tailwind

[![CI](https://github.com/build-stack/md3-tailwind/actions/workflows/ci.yml/badge.svg)](https://github.com/build-stack/md3-tailwind/actions/workflows/ci.yml)
[![Release](https://github.com/build-stack/md3-tailwind/actions/workflows/release.yml/badge.svg)](https://github.com/build-stack/md3-tailwind/actions/workflows/release.yml)
[![NPM Publish](https://github.com/build-stack/md3-tailwind/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/build-stack/md3-tailwind/actions/workflows/npm-publish.yml)
[![npm version](https://badge.fury.io/js/@build-stack%2Freact.svg)](https://badge.fury.io/js/@build-stack%2Freact)

A modern Material Design 3 components library built with Tailwind CSS and React.

![Build Stack Logo](/assets/logos/Build_Stack_Logo.png)

## ✨ Features

- 🎨 **Material Design 3** - Latest Material Design specifications
- ⚡ **Tailwind CSS** - Utility-first CSS framework for rapid development
- 🚀 **TypeScript** - Full type safety and excellent DX
- 📱 **Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🎭 **Customizable** - Easy theming and component customization
- 📦 **Tree-shakable** - Import only what you need

## 📦 Installation

```bash
npm install @build-stack/tailwind
# or
yarn add @build-stack/tailwind
# or
pnpm add @build-stack/tailwind
```

## 🚀 Quick Start

1. **Install dependencies**:
```bash
npm install @build-stack/tailwind tailwindcss
```

2. **Configure Tailwind CSS** in your `tailwind.config.js`:
```js
const { buildStackTheme } = require('@build-stack/tailwind/theme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@build-stack/tailwind/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: buildStackTheme
  },
  plugins: [],
}
```

3. **Import the CSS** in your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Start using components**:
```jsx
import { Button, Card, TextField } from '@build-stack/tailwind';

function App() {
  return (
    <div className="p-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Build Stack</h1>
        <TextField 
          label="Email" 
          placeholder="Enter your email"
          className="mb-4"
        />
        <Button variant="filled">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## 📚 Documentation

Visit our [documentation site](https://build-stack.dev) for:
- 📖 Complete API reference
- 🎨 Design system guidelines
- 🛠️ Customization guides
- 💡 Examples and tutorials

## 🧩 Components

### Actions
- `Button` - Material Design buttons with multiple variants
- `IconButton` - Icon-only buttons
- `FloatingActionButton` - FAB component

### Inputs
- `TextField` - Text input with Material Design styling
- `Select` - Dropdown selection component
- `Checkbox` - Checkbox input
- `RadioButton` - Radio button input
- `Switch` - Toggle switch

### Layout
- `Card` - Material Design cards
- `AppBar` - Top app bar component
- `NavigationDrawer` - Side navigation
- `BottomNavigation` - Bottom navigation bar

### Feedback
- `Dialog` - Modal dialogs
- `Snackbar` - Toast notifications
- `ProgressIndicator` - Loading indicators
- `Badge` - Notification badges

## 🎨 Theming

Build Stack Tailwind supports Material Design 3 dynamic theming:

```jsx
import { ThemeProvider } from '@build-stack/tailwind';

const customTheme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    // ... more colors
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © Build Stack Team

## 🔗 Links

- [Documentation](https://build-stack.dev)
- [GitHub](https://github.com/build-stack/tailwind)
- [NPM](https://www.npmjs.com/package/@build-stack/tailwind)
- [Discord Community](https://discord.gg/build-stack)
# Using Build Stack Tailwind in Your Projects

This guide shows you how to integrate and use Build Stack Tailwind components in your React applications.

## 📦 Installation

### 1. Install the Package

Once published to npm, you can install it:

```bash
npm install @build-stack/tailwind
# or
yarn add @build-stack/tailwind
# or
pnpm add @build-stack/tailwind
```

### 2. Install Peer Dependencies

Make sure you have the required peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## ⚙️ Setup

### 1. Configure Tailwind CSS

Update your `tailwind.config.js` to include Build Stack theme and content paths:

```js
import { buildStackTheme } from '@build-stack/tailwind/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Include Build Stack components in content scanning
    './node_modules/@build-stack/tailwind/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: buildStackTheme
  },
  plugins: [],
}
```

### 2. Import CSS

Add Tailwind directives to your main CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Optional: Theme Provider Setup

Wrap your app with the theme provider for advanced theming:

```jsx
// src/main.jsx or src/App.jsx
import { ThemeProvider } from '@build-stack/tailwind';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

## 🚀 Basic Usage

### Import Components

```jsx
import { Button, Card, TextField, IconButton } from '@build-stack/tailwind';

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome</h2>
      <TextField 
        label="Email" 
        placeholder="Enter your email"
        className="mb-4"
      />
      <div className="flex gap-4">
        <Button variant="filled">Submit</Button>
        <Button variant="outlined">Cancel</Button>
      </div>
    </Card>
  );
}
```

## 📚 Component Examples

### Buttons

```jsx
import { Button } from '@build-stack/tailwind';

function ButtonExamples() {
  return (
    <div className="flex gap-4">
      {/* Different variants */}
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <Button variant="elevated">Elevated</Button>
      <Button variant="tonal">Tonal</Button>
      
      {/* Different sizes */}
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      
      {/* With icons */}
      <Button 
        variant="filled" 
        startIcon={<span>🚀</span>}
      >
        Launch
      </Button>
      
      {/* Full width */}
      <Button variant="filled" fullWidth>
        Full Width Button
      </Button>
      
      {/* Disabled */}
      <Button variant="filled" disabled>
        Disabled
      </Button>
    </div>
  );
}
```

### Cards

```jsx
import { Card, Button } from '@build-stack/tailwind';

function CardExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Elevated Card */}
      <Card variant="elevated" padding="medium">
        <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
        <p className="text-surface-500 mb-4">Card with shadow elevation</p>
        <Button variant="filled">Action</Button>
      </Card>
      
      {/* Outlined Card */}
      <Card variant="outlined" padding="large">
        <h3 className="text-xl font-semibold mb-2">Outlined Card</h3>
        <p className="text-surface-500 mb-4">Card with border styling</p>
        <Button variant="outlined">Action</Button>
      </Card>
      
      {/* Filled Card */}
      <Card variant="filled" padding="small">
        <h3 className="text-xl font-semibold mb-2">Filled Card</h3>
        <p className="text-surface-500 mb-4">Card with background fill</p>
        <Button variant="text">Action</Button>
      </Card>
    </div>
  );
}
```

### Text Fields

```jsx
import { TextField } from '@build-stack/tailwind';
import { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form className="space-y-4">
      <TextField
        label="Full Name"
        value={formData.name}
        onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
        required
      />
      
      <TextField
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        error={!formData.email.includes('@') && formData.email.length > 0}
        helperText={
          !formData.email.includes('@') && formData.email.length > 0 
            ? "Please enter a valid email address" 
            : "We'll never share your email"
        }
        required
      />
      
      <TextField
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
        placeholder="Tell us what you think..."
      />
    </form>
  );
}
```

### Icon Buttons

```jsx
import { IconButton } from '@build-stack/tailwind';

function IconButtonExamples() {
  return (
    <div className="flex gap-4 items-center">
      {/* Different variants */}
      <IconButton variant="filled">
        <span>❤️</span>
      </IconButton>
      
      <IconButton variant="outlined">
        <span>⭐</span>
      </IconButton>
      
      <IconButton variant="text">
        <span>🔗</span>
      </IconButton>
      
      {/* Different sizes */}
      <IconButton size="small">
        <span>🔍</span>
      </IconButton>
      
      <IconButton size="large">
        <span>⚙️</span>
      </IconButton>
    </div>
  );
}
```

## 🎨 Customization

### Custom Styling

You can override component styles using Tailwind classes:

```jsx
import { Button } from '@build-stack/tailwind';

function CustomButton() {
  return (
    <Button 
      variant="filled"
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    >
      Custom Gradient Button
    </Button>
  );
}
```

### Theme Customization

Create custom theme variants by extending the default theme:

```jsx
import { ThemeProvider } from '@build-stack/tailwind';

const customTheme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app with custom primary color */}
    </ThemeProvider>
  );
}
```

## 🔧 Utility Functions

### Class Name Utility

Use the included `cn` utility for conditional class names:

```jsx
import { cn } from '@build-stack/tailwind';

function ConditionalStyling({ isActive, isDisabled }) {
  return (
    <div className={cn(
      'base-classes',
      isActive && 'active-classes',
      isDisabled && 'disabled-classes'
    )}>
      Content
    </div>
  );
}
```

## 📱 Complete App Example

Here's a complete example showing how to build a simple app:

```jsx
import { 
  Button, 
  Card, 
  TextField, 
  IconButton,
  ThemeProvider 
} from '@build-stack/tailwind';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-50 p-8">
        <div className="max-w-2xl mx-auto">
          <Card variant="elevated" padding="large">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-surface-900">
                Contact Us
              </h1>
              <IconButton variant="text">
                <span>❌</span>
              </IconButton>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                label="Your Name"
                value={formData.name}
                onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
                required
              />
              
              <TextField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                required
              />
              
              <TextField
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
                placeholder="How can we help you?"
                required
              />
              
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  variant="filled" 
                  fullWidth
                >
                  Send Message
                </Button>
                <Button 
                  type="button" 
                  variant="outlined"
                  onClick={() => setFormData({ name: '', email: '', message: '' })}
                >
                  Clear
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ContactForm;
```

## 🛠️ Framework Integration

### Next.js

```jsx
// pages/_app.js or app/layout.js
import '@/styles/globals.css'; // Your Tailwind CSS file
import { ThemeProvider } from '@build-stack/tailwind';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

### Vite + React

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@build-stack/tailwind';
import App from './App.jsx';
import './index.css'; // Your Tailwind CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

### Create React App

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@build-stack/tailwind';
import App from './App';
import './index.css'; // Your Tailwind CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

## 🎯 Best Practices

1. **Import only what you need** for better tree-shaking:
   ```jsx
   import { Button } from '@build-stack/tailwind';
   // Instead of: import * as BuildStack from '@build-stack/tailwind';
   ```

2. **Use the theme provider** for consistent theming across your app

3. **Combine with Tailwind utilities** for custom styling needs

4. **Test accessibility** by using keyboard navigation and screen readers

5. **Follow Material Design guidelines** when customizing components

## 🐛 Troubleshooting

### Components not styled correctly
- Ensure Tailwind CSS is properly configured
- Check that Build Stack content paths are included in `tailwind.config.js`
- Verify CSS imports are in the correct order

### TypeScript errors
- Make sure `@types/react` and `@types/react-dom` are installed
- Check that your TypeScript version is compatible

### Build issues
- Ensure all peer dependencies are installed
- Check that your bundler supports ES modules

## 📖 Additional Resources

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
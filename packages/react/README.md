# @build-stack/react

A modern Material Design 3 React components library built with Tailwind CSS.

## Installation

```bash
npm install @build-stack/react
```

## Quick Start

```jsx
import { Button, Card, TextField, ThemeProvider } from '@build-stack/react';

function App() {
  return (
    <ThemeProvider>
      <Card className="p-6">
        <TextField label="Email" placeholder="Enter your email" />
        <Button variant="filled" className="mt-4">
          Submit
        </Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Documentation

Visit [build-stack.dev](https://build-stack.dev) for full documentation.
import { buildStackTheme } from './packages/react/src/theme/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './packages/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: buildStackTheme,
  },
  plugins: [],
};
#!/usr/bin/env node

/**
 * Build Theme Script
 * Similar to Material Tailwind's theme processing
 * Generates theme files and utilities for distribution
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure dist directories exist
const distDir = path.join(__dirname, '../dist');
const themeDir = path.join(distDir, 'theme');
const utilsDir = path.join(distDir, 'utils');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(themeDir)) {
  fs.mkdirSync(themeDir, { recursive: true });
}

if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir, { recursive: true });
}

// Copy theme tokens
const sourceThemeFile = path.join(__dirname, '../src/theme/tokens.ts');
const destThemeFile = path.join(themeDir, 'tokens.js');

// Convert TypeScript to JavaScript for distribution
let themeContent = fs.readFileSync(sourceThemeFile, 'utf8');

// Simple TS to JS conversion
themeContent = themeContent
  .replace(/export const/g, 'const')
  .replace(/export default/g, 'module.exports =')
  .replace(/import.*from.*;\n/g, '')
  .replace(/\/\*\*[\s\S]*?\*\//g, '') // Remove JSDoc comments
  .replace(/export \{[^}]*\};/g, ''); // Remove export statements

// Add CommonJS exports at the end
themeContent += `

// CommonJS exports
module.exports = {
  colorTokens,
  typography,
  spacing,
  borderRadius,
  elevation,
  buildStackTheme,
};

module.exports.default = buildStackTheme;
`;

fs.writeFileSync(destThemeFile, themeContent);

// Create withMD3 utility (similar to Material Tailwind's withMT)
const withMD3Content = `/**
 * withMD3 - Utility to merge MD3 theme with Tailwind config
 * Similar to Material Tailwind's withMT helper
 */

const { buildStackTheme } = require('../theme/tokens');

function withMD3(tailwindConfig = {}) {
  return {
    ...tailwindConfig,
    content: tailwindConfig.content || [],
    theme: {
      ...tailwindConfig.theme,
      extend: {
        ...buildStackTheme,
        ...tailwindConfig.theme?.extend,
      },
    },
  };
}

module.exports = withMD3;
`;

fs.writeFileSync(path.join(utilsDir, 'withMD3.js'), withMD3Content);

// Create index file for easy importing
const indexContent = `/**
 * @build-stack/md3-tailwind
 * Material Design 3 components for Tailwind CSS and React
 */

module.exports = require('./theme/tokens');
module.exports.withMD3 = require('./utils/withMD3');
`;

fs.writeFileSync(path.join(distDir, 'theme-index.js'), indexContent);

console.log('✅ Theme build completed successfully');
console.log('📁 Generated files:');
console.log('  - dist/theme/tokens.js');
console.log('  - dist/utils/withMD3.js');
console.log('  - dist/theme-index.js');
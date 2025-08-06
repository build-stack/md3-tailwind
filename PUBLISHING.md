# Publishing Build Stack Tailwind

This guide explains how to publish the library to npm and use it in other projects.

## 📦 Publishing to NPM

### 1. Prepare for Publishing

First, ensure everything is built and ready:

```bash
# Build the library
npm run build

# Verify the build output
ls -la dist/
```

### 2. Update Package Information

Update these fields in `package.json`:

```json
{
  "name": "@build-stack/tailwind",
  "version": "1.0.0",
  "description": "A modern Material Design 3 components library built with Tailwind CSS",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/build-stack-tailwind.git"
  },
  "keywords": [
    "react",
    "components",
    "tailwindcss",
    "material-design",
    "material-design-3",
    "ui-library",
    "typescript"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT"
}
```

### 3. Create NPM Account & Login

```bash
# Create account at https://www.npmjs.com if you don't have one

# Login to npm
npm login
```

### 4. Publish the Package

```bash
# Publish to npm (first time)
npm publish --access public

# For scoped packages like @build-stack/tailwind
npm publish --access public
```

### 5. Version Updates

For future updates:

```bash
# Update version and publish
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

npm publish
```

## 🚀 Using the Published Package

### Installation

Once published, users can install it:

```bash
npm install @build-stack/tailwind
# or
yarn add @build-stack/tailwind
# or
pnpm add @build-stack/tailwind
```

### Quick Setup Guide for Users

1. **Install the package and peer dependencies:**
   ```bash
   npm install @build-stack/tailwind react react-dom tailwindcss
   ```

2. **Configure Tailwind CSS:**
   ```js
   // tailwind.config.js
   import { buildStackTheme } from '@build-stack/tailwind/theme';

   export default {
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
       './node_modules/@build-stack/tailwind/**/*.{js,ts,jsx,tsx}'
     ],
     theme: {
       extend: buildStackTheme
     },
     plugins: []
   };
   ```

3. **Import CSS:**
   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Use components:**
   ```jsx
   import { Button, Card, TextField } from '@build-stack/tailwind';

   function App() {
     return (
       <Card className="p-6">
         <TextField label="Email" placeholder="Enter email" />
         <Button variant="filled">Submit</Button>
       </Card>
     );
   }
   ```

## 🧪 Local Testing Before Publishing

### Method 1: npm link (Recommended for Development)

```bash
# In the library directory
npm link

# In your test project
npm link @build-stack/tailwind
```

### Method 2: Local File Installation

```bash
# In your test project
npm install file:../path/to/build-stack-tailwind
```

### Method 3: Packed Tarball

```bash
# In the library directory
npm pack

# This creates build-stack-tailwind-1.0.0.tgz
# Install in test project:
npm install ./build-stack-tailwind-1.0.0.tgz
```

## 📊 Package Quality Checklist

Before publishing, ensure:

- [ ] All components work correctly
- [ ] TypeScript types are properly exported
- [ ] Documentation is complete
- [ ] Examples are working
- [ ] Bundle size is reasonable
- [ ] No security vulnerabilities
- [ ] Proper peer dependencies listed
- [ ] License file included
- [ ] README is comprehensive

### Bundle Analysis

Check your bundle size:

```bash
# Analyze bundle size
npm run build

# Check gzipped size
gzip -9 -c dist/index.esm.js | wc -c
```

## 🔄 Continuous Integration

### GitHub Actions for Auto Publishing

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build library
        run: npm run build
      
      - name: Publish to NPM
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 📈 Post-Publishing

### 1. Verify Installation

Test that your package installs correctly:

```bash
npm install @build-stack/tailwind
```

### 2. Update Documentation

- Update README with installation instructions
- Create migration guides for version updates
- Add changelog entries

### 3. Community

- Announce on social media
- Submit to component libraries lists
- Create demo applications
- Write blog posts

## 🛡️ Security Best Practices

1. **Enable 2FA** on your npm account
2. **Use npm audit** to check for vulnerabilities
3. **Keep dependencies updated**
4. **Review published files** with `npm publish --dry-run`

## 📋 Common Publishing Issues

### Issue: Package name already taken
**Solution:** Use a scoped package name like `@your-org/tailwind`

### Issue: TypeScript types not working
**Solution:** Ensure `types` field in package.json points to correct `.d.ts` file

### Issue: Bundle too large
**Solution:** Check for unused dependencies, optimize imports

### Issue: Peer dependency conflicts
**Solution:** Adjust peer dependency version ranges

## 📞 Support

After publishing:

1. **Monitor GitHub issues** for bug reports
2. **Respond to community questions**
3. **Maintain backward compatibility**
4. **Regular security updates**

## 🔗 Useful Links

- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [NPM Package Best Practices](https://docs.npmjs.com/package-json)
- [TypeScript Library Starter](https://github.com/alexjoverm/typescript-library-starter)
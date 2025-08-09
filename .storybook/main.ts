import { createRequire } from "node:module";
import type { StorybookConfig } from '@storybook/react-vite';
import { resolve as pathResolve, dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  framework: dirname(require.resolve(join("@storybook/react-vite", "package.json"))),
  stories: ['../packages/**/src/**/*.stories.@(tsx|mdx)'],
  addons: [
    dirname(require.resolve(join("@storybook/addon-a11y", "package.json"))),
    dirname(require.resolve(join("@storybook/addon-docs", "package.json"))),
  ],

  viteFinal: async (cfg) => {
    cfg.resolve = cfg.resolve || {};
    const aliases = Array.isArray(cfg.resolve.alias) ? cfg.resolve.alias : [];
    cfg.resolve.alias = [
      {
        find: /^@build-stack\/md3-tailwind-core\/(.*)$/,
        replacement: pathResolve(process.cwd(), 'packages/md3-tailwind-core/$1'),
      },
      {
        find: '@build-stack/md3-tailwind-core',
        replacement: pathResolve(process.cwd(), 'packages/md3-tailwind-core/src/index.ts'),
      },
      {
        find: '@build-stack/md3-tailwind',
        replacement: pathResolve(process.cwd(), 'packages/md3-tailwind/src/index.ts'),
      },
      ...aliases,
    ];
    return cfg;
  }
};
export default config;

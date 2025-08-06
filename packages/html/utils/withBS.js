/**
 * withBS - Utility to merge Build Stack theme with Tailwind config
 * Similar to Material Tailwind's withMT helper
 */

const { buildStackTheme } = require('../theme/tokens');

function withBS(tailwindConfig = {}) {
  return {
    ...tailwindConfig,
    content: [
      // Include Build Stack components in content scanning
      './node_modules/@build-stack/html/**/*.{js,html}',
      ...(tailwindConfig.content || [])
    ],
    theme: {
      ...tailwindConfig.theme,
      extend: {
        ...buildStackTheme,
        ...tailwindConfig.theme?.extend,
      },
    },
  };
}

module.exports = withBS;
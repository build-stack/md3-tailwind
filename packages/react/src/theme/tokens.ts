/**
 * Material Design 3 Color Tokens
 * Based on Material Design 3 specifications
 */
export const colorTokens = {
  // Primary colors
  primary: {
    50: '#f0f4ff',
    100: '#dae6ff',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    900: '#312e81',
  },
  // Secondary colors  
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    900: '#4c1d95',
  },
  // Surface colors
  surface: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    500: '#737373',
    900: '#171717',
  },
  // State colors
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    700: '#b91c1c',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    700: '#a16207',
  },
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    700: '#15803d',
  },
  info: {
    50: '#eff6ff',
    500: '#3b82f6',
    700: '#1d4ed8',
  },
};

/**
 * Material Design 3 Typography Scale
 */
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    'display-large': ['57px', { lineHeight: '64px', fontWeight: '400' }],
    'display-medium': ['45px', { lineHeight: '52px', fontWeight: '400' }],
    'display-small': ['36px', { lineHeight: '44px', fontWeight: '400' }],
    'headline-large': ['32px', { lineHeight: '40px', fontWeight: '400' }],
    'headline-medium': ['28px', { lineHeight: '36px', fontWeight: '400' }],
    'headline-small': ['24px', { lineHeight: '32px', fontWeight: '400' }],
    'title-large': ['22px', { lineHeight: '28px', fontWeight: '400' }],
    'title-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
    'title-small': ['14px', { lineHeight: '20px', fontWeight: '500' }],
    'label-large': ['14px', { lineHeight: '20px', fontWeight: '500' }],
    'label-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
    'label-small': ['11px', { lineHeight: '16px', fontWeight: '500' }],
    'body-large': ['16px', { lineHeight: '24px', fontWeight: '400' }],
    'body-medium': ['14px', { lineHeight: '20px', fontWeight: '400' }],
    'body-small': ['12px', { lineHeight: '16px', fontWeight: '400' }],
  },
};

/**
 * Material Design 3 Spacing Scale
 */
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
};

/**
 * Material Design 3 Border Radius
 */
export const borderRadius = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  full: '9999px',
};

/**
 * Material Design 3 Elevation (Box Shadows)
 */
export const elevation = {
  0: 'none',
  1: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  2: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
  3: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
  4: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
  5: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

/**
 * Complete theme object for Tailwind CSS
 */
export const buildStackTheme = {
  colors: colorTokens,
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  spacing,
  borderRadius,
  boxShadow: elevation,
};

// Default export for easier importing
export default buildStackTheme;
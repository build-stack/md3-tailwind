import { createContext, useContext, ReactNode } from 'react';

interface Theme {
  colors?: Record<string, any>;
  spacing?: Record<string, string>;
  borderRadius?: Record<string, string>;
  // Add more theme properties as needed
}

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const value = {
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
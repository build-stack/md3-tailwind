"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light"
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "md3-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">("light")

  // Detect system theme preference
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
    }

    updateSystemTheme()
    mediaQuery.addEventListener("change", updateSystemTheme)
    
    return () => mediaQuery.removeEventListener("change", updateSystemTheme)
  }, [])

  // Load theme from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored && ["light", "dark", "system"].includes(stored)) {
        setTheme(stored as Theme)
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [storageKey])

  // Apply theme to document
  React.useEffect(() => {
    const root = window.document.documentElement
    const resolvedTheme = theme === "system" ? systemTheme : theme

    // Always set an explicit theme class to override system preference
    root.classList.remove("light", "dark")
    root.classList.add(resolvedTheme)

    // Save to localStorage
    try {
      localStorage.setItem(storageKey, theme)
    } catch {
      // Ignore localStorage errors
    }
  }, [theme, systemTheme, storageKey])

  const value = {
    theme,
    setTheme,
    resolvedTheme: theme === "system" ? systemTheme : theme
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}

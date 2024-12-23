'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({ children, attribute = 'data-theme', defaultTheme = 'system', enableSystem = true }: ThemeProviderProps) {
  return <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme} enableSystem={enableSystem}>{children}</NextThemesProvider>
}

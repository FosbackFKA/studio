
'use client';

import * as React from 'react';

type Theme = 'consumer' | 'bonde' | 'bedrift';

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export function ThemeProvider({
  value,
  children,
}: {
  value: Theme;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = React.useState<Theme>(value);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  
  React.useEffect(() => {
    setTheme(value);
  }, [value]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

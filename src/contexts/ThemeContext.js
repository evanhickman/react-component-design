import React, { createContext } from 'react';
export const ThemeContext = createContext();
import useTheme from '../hooks/useTheme';

function ThemeProvider({ children, startingTheme }) {
  const { theme, setTheme } = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };

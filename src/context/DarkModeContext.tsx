import { createContext, useState } from 'react';

export interface DarkModeContextTypes {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextTypes | null>(null);
function DarkModeProvider(props: any) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value: DarkModeContextTypes = {
    darkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={value}>{props.children}</DarkModeContext.Provider>;
}
export { DarkModeContext, DarkModeProvider };

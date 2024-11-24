import { createContext, FC, ReactNode, useState } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

// Definisikan provider konteks
interface DarkModeContextProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {}, // Fungsi dummy untuk default
});

const DarkModeContextProvider: FC<DarkModeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;

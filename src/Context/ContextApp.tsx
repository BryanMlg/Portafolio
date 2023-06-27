import React, { createContext, useState, ReactNode } from "react";

// Definición del contexto
interface AppContextType {
  isOn: boolean;
  isDark: boolean;
  toggleSwitch: () => void;
  toggleDark: () => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<{ children: ReactNode }> = ({children,}) => {
  const [isOn, setIsOn] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  const toggleDark = () => {
    setIsDark(!isDark);
  };
  const contextValue: AppContextType = {
    isOn,
    toggleSwitch,
    isDark,
    toggleDark,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

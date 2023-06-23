import React, { createContext, useState, ReactNode } from 'react';

// Definición del contexto
type AppContextType = {
  isOn: boolean;
  toggleSwitch: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const contextValue: AppContextType = {
    isOn,
    toggleSwitch,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

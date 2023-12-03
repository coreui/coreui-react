import React, { createContext, useContext, useState, useEffect } from 'react';


// Create the context
const ConfiguratorFormContext = createContext();

// Define the context provider component
export const ConfiguratorFormContextProvider = ({ children }) => {
  const [collators, setCollators] = useState(0);
  const [coretime, setCoretime] = useState({every: null, amount: null });
  const [runtime, setRuntime] = useState({template: null, specs: {paraId:null, ss58:null, tokenSymbol:null, decimals:null}});

  // Context value
  const contextValue = {
    collators,
    setCollators,
    coretime,
    setCoretime,
    runtime,
    setRuntime
  };

  return (
    <ConfiguratorFormContext.Provider value={contextValue}>
      {children}
    </ConfiguratorFormContext.Provider>
  );
};

// Custom hook to use the context
export function useConfiguratorFormContext() {
  return useContext(ConfiguratorFormContext);
}

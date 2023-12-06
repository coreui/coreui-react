import React, { createContext, useContext, useState, useEffect } from 'react';


// Create the context
const ConfiguratorFormContext = createContext();

const initialState = {
  collators: 0,
  coretime: {every: null, amount: null },
  runtime: {template: null, specs: {paraId:null, ss58:null, tokenSymbol:null, decimals:null}}
}

// Define the context provider component
export const ConfiguratorFormContextProvider = ({ children }) => {
  const [collators, setCollators] = useState(initialState.collators);
  const [coretime, setCoretime] = useState(initialState.coretime);
  const [runtime, setRuntime] = useState(initialState.runtime);

const restartForm = () => {
  setCollators(initialState.collators);
  setCoretime(initialState.coretime);
  setRuntime(initialState.runtime);
}

  // Context value
  const contextValue = {
    collators,
    setCollators,
    coretime,
    setCoretime,
    runtime,
    setRuntime,
    restartForm
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

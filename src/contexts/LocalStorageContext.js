import React, { createContext, useContext, useState, useEffect } from 'react';

// Helper functions to manage localStorage
const getLocalStorageItem = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialValue;
};

const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Create the context
const LocalStorageContext = createContext();

// Define the context provider component
export const LocalStorageContextProvider = ({ children }) => {
  const [network, setNetwork] = useState(() => getLocalStorageItem('network', {}));
  const [coretime, setCoretime] = useState(() => getLocalStorageItem('coretime', {}));
  //TODO: this might need to be deleted
  const [runtime, setRuntime] = useState(() => getLocalStorageItem('runtime', {}));

  const [networkStatus, setNetworkStatus] = useState(() => getLocalStorageItem('networkStatus', {}));

  // Update localStorage when network or coretime changes
  useEffect(() => {
    setLocalStorageItem('network', network);
  }, [network]);

  useEffect(() => {
    setLocalStorageItem('coretime', coretime);
  }, [coretime]);
  
  useEffect(() => {
    setLocalStorageItem('runtime', runtime);
  }, [runtime]);

  useEffect(() => {
    setLocalStorageItem('networkStatus', networkStatus);
  }, [networkStatus]);

  // Context value
  const contextValue = {
    network,
    setNetwork,
    coretime,
    setCoretime,
    runtime,
    setRuntime,
    networkStatus,
    setNetworkStatus
  };

  return (
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the context
export function useLocalStorageContext() {
  return useContext(LocalStorageContext);
}

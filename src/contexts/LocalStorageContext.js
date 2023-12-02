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
  const [collators, setCollators] = useState(() => getLocalStorageItem('collators', []));
  const [coretime, setCoretime] = useState(() => getLocalStorageItem('coretime', {}));
  const [runtime, setRuntime] = useState(() => getLocalStorageItem('runtime', {}));

  // Update localStorage when collators or coretime changes
  useEffect(() => {
    setLocalStorageItem('collators', collators);
  }, [collators]);

  useEffect(() => {
    setLocalStorageItem('coretime', coretime);
  }, [coretime]);
  
  useEffect(() => {
    setLocalStorageItem('runtime', runtime);
  }, [runtime]);

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
    <LocalStorageContext.Provider value={contextValue}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the context
export function useLocalStorageContext() {
  return useContext(LocalStorageContext);
}

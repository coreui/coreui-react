import React from 'react'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'

const ConfiguratorCollators = () => {

  const { collators, setCollators } = useLocalStorageContext();

  // Example function to update collators
  const addCollator = (newCollator) => {
    setCollators([...collators, newCollator]);
  };


  return (
    <div>
      <h1>Configure Collators</h1>
      <ul>
      {collators.map((collator, index) => {
          // If collator is an object, make sure to render a property of the object
          return <li key={index}>{collator.time || collator}</li>; // Adjust based on the structure of collator
        })}
      </ul>
      <button onClick={() => addCollator({ ...collators, time: new Date().toISOString() })}> 
        Add Collator
      </button>
    </div>
  );
};

export default ConfiguratorCollators


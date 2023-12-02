import React from 'react'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'

const ConfiguratorCoretime = () => {
  const { collators } = useLocalStorageContext();

  return (
    <>
    <h1>Configure Coretime</h1>
          <ul>
      {collators.map((collator, index) => {
          // If collator is an object, make sure to render a property of the object
          return <li key={index}>{collator.time || collator}</li>; // Adjust based on the structure of collator
        })}
      </ul>
      </>
  )
}

export default ConfiguratorCoretime

import React from 'react';

//export const Context = React.createContext({});

const Slot = (props)=>{

  const {
    content,
    children,
    ...attributes
  } = props;

  //Context.slotData = attributes;

  //console.log(attributes);

  //alert(attributes.length);
  /*
  var clonedElementWithMoreProps = React.cloneElement(
    children,
    attributes
  );
  */

  return content?content:children?children:'';
}

export default Slot;

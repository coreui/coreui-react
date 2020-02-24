import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CDropdownCustom from './CDropdownCustom';

//component - CoreUI / CDropdown

const CDropdown = props=>{

  let {
    custom,
    //
    toggle,
    show,
    defaultOpen,
    ...attributes
  } = props;

  //custom

  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  if (!custom){
    const userToggle = toggle;
    show = isOpen;
    toggle = ()=>{
      setIsOpen(!isOpen);
      if (userToggle)
        userToggle();
    }
  }

  //render

  return <CDropdownCustom {...attributes} show={show} toggle={toggle} />;

}

CDropdown.propTypes = {
  ...CDropdownCustom.propTypes,
  custom: PropTypes.bool,
  //
  defaultOpen: PropTypes.bool,
};

export default CDropdown;

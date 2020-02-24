import React from 'react';
import PropTypes from 'prop-types';

//
import CCard from './CCard';
import CCardBody from './CCardBody';
import Slot from './Shared/Slot.js';

//component - CoreUI / CWidgetDropdown

const CWidgetDropdown = props=>{

  const {
    children,
    //
    header,
    text,
    color,
    dropdownSlot,

    mainText,
    ...attributes
  } = props;

  return (
    <CCard {...attributes} custom className="text-white" color={color}>
      <CCardBody className="pb-0 d-flex justify-content-between">
        <div>
          {header?<div className="text-value-lg">{header}</div>:''}
          {mainText?<div>{text}</div>:''}
        </div>
        <Slot content={dropdownSlot} />
      </CCardBody>
      {children}
    </CCard>
  )

}

CWidgetDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  toggle: PropTypes.func,
  dropdownSlot: PropTypes.node,
  //old
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
};

CWidgetDropdown.defaultProps = {
  header: '89.9%',
  text: 'text',
  mainText: 'Widget title',
  smallText: 'Widget helper text',
  // color: '',
  value: '25',
  variant: '',
};

export default CWidgetDropdown;

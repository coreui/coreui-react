import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
import CCardBody from './CCardBody';
import CIcon from './CIcon';
import CButtonGroup from './CButtonGroup';
import CDropdownToggle from './CDropdownToggle';
import CDropdownMenu from './CDropdownMenu';
import CDropdownItem from './CDropdownItem';
import CDropdown from './CDropdown';
import Slot from './Shared/Slot.js';

//component - CoreUI / CWidgetDropdown

const CWidgetDropdown = props=>{

  const {
    children,
    className,
    cssModule,
    //
    header,
    text,
    color,
    toggle,
    dropdownSlot,

    mainText,
    smallText,
    value,
    variant,
    ...attributes
  } = props;

  const [isOpen, setIsOpen] = useState(false);

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

  //

  const onToggle = ()=>{
    setIsOpen(!isOpen);
    toggle && toggle(isOpen);
  }

  const progress = { style: '', color: color, value: value };
  const card = { style: '', bgColor: '' };

  if (variant === 'inverse') {
    progress.style = 'progress-white';
    progress.color = '';
    card.style = 'text-white';
    card.bgColor = 'bg-' + color;
  }

  const classes = mapToCssModules(classNames(
    className,
    card.style,
    card.bgColor
  ), cssModule);
  progress.style = classNames('progress-xs my-3', progress.style);

  return (
    <CCard {...attributes} custom className={classes}>
      <CCardBody>
        <CButtonGroup className="float-right">
          <CDropdown custom id='card1' show={isOpen} toggle={onToggle}>
            <CDropdownToggle caret className="p-0" />
            <CDropdownMenu right>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CButtonGroup>
        <div className="h4 m-0">{header}</div>
        <div>{mainText}</div>
      </CCardBody>
      <div>{children}</div>
    </CCard>
  );

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

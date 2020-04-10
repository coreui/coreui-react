import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CTooltipPopoverWrapper from './CTooltipPopoverWrapper';

//component - CoreUI / CTooltip

const CTooltip = props=>{

  let {
    custom,
    //
    show,
    toggle,
    defaultOpen,
    ...attributes
  } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  if (!custom){
    const userToggle = toggle;
    toggle = (e)=>{
      setIsOpen(!isOpen);
      if (userToggle)
        userToggle(e);
    }
    show = isOpen;
  }

  // render

  const popperClasses = classNames(
    'tooltip',
    'show',
    props.className
  );

  const classes = classNames(
    'tooltip-inner',
    props.innerClassName
  );

  return (
    <CTooltipPopoverWrapper
      {...attributes}
      toggle={toggle}
      show={show}
      className={popperClasses}
      innerClassName={classes}
    />
  );

}

CTooltip.propTypes = {
  ...CTooltipPopoverWrapper.propTypes,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  defaultOpen: PropTypes.bool
}

CTooltip.defaultProps = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus',
};

export default CTooltip;

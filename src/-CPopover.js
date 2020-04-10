import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CTooltipPopoverWrapper from './CTooltipPopoverWrapper';

//component - CoreUI / CPopover

const CPopover = props=>{

  let {
    custom,
    //
    toggle,
    show,
    defaultOpen,

    content,
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

  //render

  const popperClasses = classNames(
    'popover',
    'show',
    props.className
  );

  const classes = classNames(
    'popover-inner',
    props.innerClassName
  );

  //children, placement, modifiers and strategy
  return (
    <CTooltipPopoverWrapper
      {...attributes}
      reference = {content}
    />
  )

  /*
  return (
    <CTooltipPopoverWrapper
      {...attributes}
      toggle={toggle}
      show={show}
      className={popperClasses}
      innerClassName={classes}
    />
  );
  */

}

CPopover.propTypes = {
  ...CTooltipPopoverWrapper.propTypes,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  defaultOpen: PropTypes.bool,
}

CPopover.defaultProps = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
};

export default CPopover;

import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
//import CPopperContent from './CPopperContent';
import { Manager, Reference, Popper } from 'react-popper';

import {
  getTarget,
  targetPropType,
  omit,
  PopperPlacements,
  mapToCssModules,
  DOMElement
} from './Shared/helper.js';

// global

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};

const isInDOMSubtree = (element, subtreeRoot)=>{
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

//component - CoreUI / CTooltipPopoverWrapper

const CTooltipPopoverWrapper = props=>{

  const {
    className,
    cssModule,
    //
    innerClassName,
    target,
    show: isOpen,
    hideArrow,
    boundariesElement,
    placement,//
    placementPrefix,
    arrowClassName,
    container,
    modifiers,
    offset,

    reference,
    children,//

  } = props;



  return (
    <Manager>
      <Reference>
        {reference}
      </Reference>
      <Popper placement={placement}>
        {children}
      </Popper>
    </Manager>
  );

}

CTooltipPopoverWrapper.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  show: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trigger: PropTypes.string,
};

CTooltipPopoverWrapper.defaultProps = {
  show: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function () {},
  trigger: 'click',
};

export default CTooltipPopoverWrapper;

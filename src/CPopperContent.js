import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {Arrow, Popper as ReactPopper} from 'react-popper';
import {getTarget, targetPropType, mapToCssModules, DOMElement, tagPropType} from './Shared/helper.js';
import CFade from './CFade';

export const Context = React.createContext({});

//component - CoreUI / CPopperContentWrapper

class CPopperContentWrapper extends React.Component {
  getChildContext(){
    return this.context;
  }
  render(){
    return this.props.children;
  }
}

CPopperContentWrapper.contextType = Context;

CPopperContentWrapper.childContextTypes = {
  popperManager: PropTypes.object.isRequired
};

//component - CoreUI / CPopperContent

const CPopperContent = props=>{

  const [placement, setPlacement] = useState();

  const fields = useRef({
    firstRender: true
  }).current;

  const setTargetNode = node=>{
    fields.targetNode = node;
  }

  const getTargetNode = ()=>{
    return fields.targetNode;
  }

  const getContainerNode = ()=>{
    return getTarget(props.container);
  }

  const getRef = ref=>{
    fields._element = ref;
  }

  const handlePlacementChange = data=>{
    if (placement !== data.placement) {
      setPlacement(data.placement);
    }
    return data;
  }

  //effect - update
  useEffect(() => {
    if (fields.firstRender)
      return;
    if (fields._element && fields._element.childNodes && fields._element.childNodes[0] && fields._element.childNodes[0].focus) {
      fields._element.childNodes[0].focus();
    }
  });

  useEffect(() => {
    fields.firstRender = false;
  },
  []);

  //render

  const renderChildren = ()=>{

    const {
      tag,
      children,
      className,
      cssModule,
      //
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArrow,
      container,
      modifiers,
      boundariesElement,
      ...attributes
    } = props;

    const arrowClassName = mapToCssModules(classNames(
      'arrow',
      _arrowClassName
    ), cssModule);

    const placement2 = (placement || attributes.placement).split('-')[0];

    const popperClassName = mapToCssModules(classNames(
      className, //8 _popperClassName
      placementPrefix ? `${placementPrefix}-${placement2}` : placement2
    ), props.cssModule);

    const extendedModifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      preventOverflow: { boundariesElement },
      update: {
        enabled: true,
        order: 950,
        fn: handlePlacementChange,
      },
      ...modifiers,
    };

    return (
      <Context.Provider value={{popperManager: {
        setTargetNode: setTargetNode,
        getTargetNode: getTargetNode,
      }}}>
        <CPopperContentWrapper>
          <ReactPopper modifiers={extendedModifiers} {...attributes} component={tag} className={popperClassName} x-placement={placement || attributes.placement}>
            {children}
            {!hideArrow && <Arrow className={arrowClassName} />}
          </ReactPopper>
        </CPopperContentWrapper>
      </Context.Provider>
    );

  }

  setTargetNode(getTarget(props.target));

  if (props.isOpen) {
    return props.container === 'inline' ?
      renderChildren() :
      ReactDOM.createPortal((<div ref={getRef}>{renderChildren()}</div>), getContainerNode());
  }

  return null;

}

CPopperContent.propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
};

CPopperContent.defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
};

export default CPopperContent;

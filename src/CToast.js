import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import Slot from './Shared/Slot';
import CToastHeader from './CToastHeader';
import CToastBody from './CToastBody';
import CButtonClose from './CButtonClose';
import CFade from './CFade';
import style from './CToast.module.css';

//component - CoreUI / CToast

const CToast = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    custom,
    //
    innerRef,
    show,
    header,
    headerSlot,
    autohide,
    closeButton,
    fade,
    transition,
    ...attributes
  } = props;

  const [shown, setShown] = useState(show);

  const transitionPar = {
    ...CFade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  let timeout;

  const setAutohide = ()=>{
    timeout = setTimeout(()=>{
      setShown(false);
    }, autohide);
  }

  const onMouseOver = ()=>{
    clearTimeout(timeout);
  }
  const onMouseOut = ()=>{
    if (autohide)
      setAutohide();
  }
  const onClick = ()=>{
    setShown(false);
  }

  if (autohide){
    setAutohide();
  }

  // render

  const classes = mapToCssModules(classNames(
    className,
    'toast',
    'mytoast',
  ), Object.assign(style, cssModule));

  if (!shown)
    return null;

  if (!custom)
    return (
      <CFade
        {...attributes}
        {...transitionPar}
        tag={Tag}
        className={classes}
        in={true}
        role="alert"
        innerRef={innerRef}
      >
        <Tag
          {...attributes}
          aria-live="assertive"
          aria-atomic="true"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className={classes}
        >
          <CToastHeader>
          {
            headerSlot || header?
              <Slot content={headerSlot}>
                <strong className="mr-auto">{header}</strong>
              </Slot>:''
          }
          {
            closeButton?
              <CButtonClose className='ml-2 mb-1' onClick={onClick}/>:''
          }
          </CToastHeader>
          <CToastBody>
            {attributes.children}
          </CToastBody>
        </Tag>
      </CFade>
    );

  return (
    <Tag {...attributes} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={classes} />
  );

}

CToast.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  headerSlot: PropTypes.node,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  show: PropTypes.bool,
  header: PropTypes.string,
  autohide: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  closeButton: PropTypes.bool,
  fade: PropTypes.bool,
  transition: PropTypes.shape(CFade.propTypes),
  role: PropTypes.string
};

CToast.defaultProps = {
  tag: 'div',
  autohide: 1500,
  closeButton: true,
  fade: true,
  transition: {
    ...CFade.defaultProps,
    unmountOnExit: true,
  },
  role: 'alert',
};

export default CToast;

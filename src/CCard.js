import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules, deprecated} from './Shared/helper.js';
import CCardBody from './CCardBody';
import CCardHeader from './CCardHeader';
import CCardFooter from './CCardFooter';

//component - CoreUI / CCard

const CCard = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    color,
    textColor,
    borderColor,
    accentColor,
    headerSlot,
    footerSlot,
    align,
    bodyClassName,
    bodyProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'card',
    align ? `text-${align}` : false,
    textColor ? `text-${textColor}` : false,
    color ? `bg-${color}` : false,
    borderColor ? `border-${borderColor}` : false,
    accentColor ? `card-accent-${accentColor}` : false,
  ), cssModule);

  if (!custom)
    return (
      <Tag {...attributes} className={classes} ref={innerRef}>
        {headerSlot?(
        <CCardHeader>
          {headerSlot}
        </CCardHeader>
        ): ''}
        <CCardBody {...bodyProps} className={bodyClassName}>
          {children}
        </CCardBody>
        {footerSlot?(
        <CCardFooter>
          {footerSlot}
        </CCardFooter>
        ): ''}
      </Tag>
    );

  return (
    <Tag {...attributes} className={classes} ref={innerRef} children={children}/>
  );

}

CCard.sharedPropTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  accentColor: PropTypes.string,
  bodyClassName: PropTypes.string,
  bodyProps: PropTypes.object
}

CCard.propTypes = {
  ...CCard.sharedPropTypes,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  align: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  accentColor: PropTypes.string,
  bodyClassName: PropTypes.string,
  bodyProps: PropTypes.object,
  headerSlot: PropTypes.node,
  footerSlot: PropTypes.node
}

CCard.defaultProps = {
  tag: 'div'
}

export default CCard;

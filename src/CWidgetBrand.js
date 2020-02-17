import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
//import CProgress from './CProgress';
import CCardBody from './CCardBody';
import CCardHeader from './CCardHeader';
import CCardFooter from './CCardFooter';
import Slot from './Shared/Slot.js';
import CCol from './CCol';

//component - CoreUI / CWidget3

const CWidgetBrand = props=>{

  const {
    children,
    className,
    cssModule,
    //
    dataBox,

    color,
    rightHeader,
    rightFooter,
    leftHeader,
    leftFooter,
    addHeaderClasses,
    bodySlot,
    ...attributes
  } = props;

  // render

  const classes = mapToCssModules(
    classNames(
      className,
      "content-center text-white p-0",
      color ? `bg-${color}` : '',
      addHeaderClasses
    ),
    cssModule
  );

  return (
    <CCard {...attributes} custom>
      <CCardHeader
        className={classes}
      >
        <Slot content={children} />
      </CCardHeader>
      <Slot content={bodySlot}>
        <CCardBody className="row text-center">
          <CCol>
            {
              rightHeader?
                <div className="text-value-lg">
                  {rightHeader}
                </div>:''
            }
            {
              rightFooter?
                <div className="text-uppercase text-muted small">
                  {rightFooter}
                </div>:''
            }
          </CCol>
          <div className="c-vr"></div>
          <CCol>
            {
              leftHeader?
                <div className="text-value-lg">
                  {rightHeader}
                </div>:''
            }
            {
              leftFooter?
                <div className="text-uppercase text-muted small">
                  {rightFooter}
                </div>:''
            }
          </CCol>
        </CCardBody>
      </Slot>
    </CCard>
  )


  const data = dataBox();
  const variant = data.variant;

  if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
    return (null);
  }

  const back = 'bg-' + variant;
  const icon = 'my-4 icon text-white fa fa-' + variant;
  const keys = Object.keys(data);
  const vals = Object.values(data);

  const classCard = 'card';
  const classCardHeader = classNames(`${classCard}-header`, back, 'content-center');
  const classCardBody = classNames(`${classCard}-body`, 'row text-center');
  //const classes = mapToCssModules(classNames(classCard, className), cssModule);

  return (
    <CCard {...attributes} custom className={classes}>
      <CCardHeader className={classCardHeader}>
        <i className={icon}></i>
        {children}
      </CCardHeader>
      <CCardBody className={classCardBody}>
        <div className="col">
          <div className="text-value-xl">{vals[1]}</div>
          <div className="text-uppercase text-muted small">{keys[1]}</div>
        </div>
        <div className="vr"></div>
        <div className="col">
          <div className="text-value-xl">{vals[2]}</div>
          <div className="text-uppercase text-muted small">{keys[2]}</div>
        </div>
      </CCardBody>
    </CCard>
  );

}

CWidgetBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  dataBox: PropTypes.func,
  //old
  color: PropTypes.string,
  rightHeader: PropTypes.string,
  rightFooter: PropTypes.string,
  leftHeader: PropTypes.string,
  leftFooter: PropTypes.string,
  addHeaderClasses: PropTypes.oneOfType([String, Array, Object]),
  bodySlot: PropTypes.node
};

CWidgetBrand.defaultProps = {
  dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};

export default CWidgetBrand;

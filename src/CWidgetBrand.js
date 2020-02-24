import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules} from './Shared/helper.js';
//
import CCard from './CCard';
//import CProgress from './CProgress';
import CCardBody from './CCardBody';
import CCardHeader from './CCardHeader';
import Slot from './Shared/Slot.js';
import CCol from './CCol';

//component - CoreUI / CWidget3

const CWidgetBrand = props=>{

  const {
    children,
    className,
    cssModule,
    //

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

}

CWidgetBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  //dataBox: PropTypes.func,
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
  //dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};

export default CWidgetBrand;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
//import CProgress from './CProgress';
import CCardBody from './CCardBody';
//import CCardHeader from './CCardHeader';
//import CCardFooter from './CCardFooter';

//component - CoreUI / CWidgetSimple

const CWidgetSimple = props=>{

  const {
    children,
    className,
    cssModule,
    //
    header,
    mainText,
    color,
    variant,
    ...attributes
  } = props;

  const card = { style: '', bgColor: '' };

  if (variant === 'inverse') {
    card.style = 'text-white';
    card.bgColor = 'bg-' + color;
  }

  const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);

  return (
    <CCard {...attributes} custom className={classes}>
      <CCardBody className="text-center">
        {/*
        <CButtonGroup className="float-right">
          <CButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
            <CDropdownToggle caret className="p-0" color="transparent">
              <i className="icon-settings"></i>
            </CDropdownToggle>
            <CDropdownMenu right>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here</CDropdownItem>
            </CDropdownMenu>
          </CButtonDropdown>
        </CButtonGroup>
        */}
        <div className="text-muted small text-uppercase font-weight-bold">{header}</div>
        <div className="text-value-xl py-3">{mainText}</div>
        {children}
      </CCardBody>
    </CCard>
  );

}

CWidgetSimple.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  mainText: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
};

CWidgetSimple.defaultProps = {
  header: 'title',
  mainText: 'text',
  color: '',
  variant: '',
};

export default CWidgetSimple;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
import CProgress from './CProgress';
//import CCardBody from './CCardBody';
//import CCardHeader from './CCardHeader';
//import CCardFooter from './CCardFooter';

//component - CoreUI / CWidgetProgress

const CWidgetProgress = props=>{

  const {
    children,
    className,
    cssModule,
    //
    header,
    mainText,
    smallText,
    color,
    value,
    variant,
    ...attributes
  } = props;

  const progress = { style: '', color: color, value: value };
  const card = { style: '', bgColor: '' };

  if (variant === 'inverse') {
    progress.style = 'progress-white';
    progress.color = '';
    card.style = 'text-white';
    card.bgColor = 'bg-' + color;
  }

  const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
  progress.style = classNames('progress-xs my-3', progress.style);

  return (
    <CCard className={classes} {...attributes}>
      <div className="h4 m-0">{header}</div>
      <div>{mainText}</div>
      <CProgress className={progress.style} color={progress.color} value={progress.value} />
      <small className="text-muted">{smallText}</small>
      <div>{children}</div>
    </CCard>
  );

}

CWidgetProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  header: PropTypes.string,
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
};

CWidgetProgress.defaultProps = {
  header: '89.9%',
  mainText: 'Widget title',
  smallText: 'Widget helper text',
  // color: '',
  value: '25',
  variant: ''
};

export default CWidgetProgress;

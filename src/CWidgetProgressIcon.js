import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
import CProgress from './CProgress';
import CCardBody from './CCardBody';
import {CIcon} from '@coreui/icons-react';

//component - CoreUI / CWidget4

const CWidgetProgressIcon = props=>{

  const {
    children,
    className,
    cssModule,
    //
    header,
    value,
    icon,
    color,
    invert,
    ...attributes
  } = props;

  const progress = { style: '', color: color, value: value };
  const card = { style: '', bgColor: '', icon: icon };

  if (invert) {
    progress.style = 'progress-white';
    progress.color = '';
    card.style = 'text-white';
    card.bgColor = 'bg-' + color;
  }

  const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
  progress.style = classNames('progress-xs mt-3 mb-0', progress.style);

  return (
    <CCard {...attributes} className={classes}>
      <div className="text-muted text-right mb-4">
        <CIcon name={card.icon} size="xl" />
      </div>
      <div className="text-value-lg">{header}</div>
      <small className="text-muted text-uppercase font-weight-bold">{children}</small>
      <CProgress className={progress.style} color={progress.color} value={progress.value} />
    </CCard>
  );

}

CWidgetProgressIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  invert: PropTypes.bool,
};

CWidgetProgressIcon.defaultProps = {
  header: '87.500',
  icon: 'cil-people',
  color: 'info',
  value: '25',
  children: 'Visitors',
  invert: false,
};

export default CWidgetProgressIcon;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
//import CProgress from './CProgress';
import CCardBody from './CCardBody';
//import CCardHeader from './CCardHeader';
import CCardFooter from './CCardFooter';

//component - CoreUI / CWidgetIcon

const CWidgetIcon = props=>{

  const {
    children,
    className,
    cssModule,
    //
    header,
    mainText,
    icon,
    color,
    footer,
    link,
    variant,
    ...attributes
  } = props;

  const padding = (variant === '0' ? { card: 'p-3', icon: 'p-3' } : (variant === '1' ? {
    card: 'p-0', icon: 'p-4', lead: 'pt-3',
  } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' }));

  const card = { style: 'd-flex', color: color, icon: icon, classes: '' };
  card.classes = mapToCssModules(classNames(className, card.style, padding.card, 'align-items-center'), cssModule);

  const lead = { style: 'text-value', color: color, classes: '' };
  lead.classes = classNames(lead.style, 'text-' + card.color);

  const blockIcon = function (icon) {
    const classes = classNames(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
    return (<i className={classes}></i>);
  };

  const cardFooter = function () {
    if (footer) {
      return (
        <CCardFooter className="px-3 py-2">
          <a className="align-items-center btn-block d-flex justify-content-between text-muted" href={link}>
            <span className="small font-weight-bold">
              View More
            </span>
            <i className="fa fa-angle-right float-right font-lg"></i>
          </a>
        </CCardFooter>
      );
    }
  };

  return (
    <CCard custom {...attributes}>
      <CCardBody className={card.classes} {...attributes}>
        <div>
          {blockIcon(card.icon)}
        </div>
        <div>
          <div className={lead.classes}>{header}</div>
          <div className="text-muted text-uppercase font-weight-bold small">{mainText}</div>
        </div>
      </CCardBody>
      {cardFooter()}
    </CCard>
  );

}

CWidgetIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
};

CWidgetIcon.defaultProps = {
  header: '$1,999.50',
  mainText: 'Widget title',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#',
};

export default CWidgetIcon;

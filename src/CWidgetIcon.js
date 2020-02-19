import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {mapToCssModules, omit, pick, TransitionPropTypeKeys, TransitionTimeouts, tagPropType} from './Shared/helper.js';
//
import CCard from './CCard';
import CCardBody from './CCardBody';
import CCardFooter from './CCardFooter';
import {CIcon} from '@coreui/icons-react';

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
    const classes = classNames('bg-' + card.color, 'text-white', padding.icon, 'mr-3 float-left');
    return <div className={classes}><CIcon name={icon} /></div>
  };

  const cardFooter = function () {
    if (footer) {
      return (
        <CCardFooter className="px-3 py-2">
          <a className="align-items-center btn-block d-flex justify-content-between text-muted" href={link}>
            <span className="small font-weight-bold">
              View More
            </span>
            <CIcon className="float-right" name="cil-chevron-right" size="lg" />
          </a>
        </CCardFooter>
      );
    }
  };

  return (
    <CCard {...attributes} custom>
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
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
};

CWidgetIcon.defaultProps = {
  header: '$1,999.50',
  mainText: 'Widget title',
  icon: 'cil-settings',
  color: 'primary',
  variant: '0',
  link: '#',
};

export default CWidgetIcon;

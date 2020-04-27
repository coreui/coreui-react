import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CWidgetDropdown

const CWidgetDropdown = props => {

  const {
    children,
    className,
    cssModule,
    //
    header,
    color,
    footerSlot,
    text,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    'card text-white', color && `bg-${color}`, className
  ), cssModule)

  return (
    <div className={classes} {...attributes}>
      <div className="card-body pb-0 d-flex justify-content-between">
        <div>
          { header && <div className="text-value-lg">{header}</div>}
          { text && <div>{text}</div>}
        </div>
        { children }
      </div>
      { footerSlot }
    </div>
  )
}

CWidgetDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  color: PropTypes.string,
  footerSlot: PropTypes.node,
  text: PropTypes.string,
};

export default CWidgetDropdown

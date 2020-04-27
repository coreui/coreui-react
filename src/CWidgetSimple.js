import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CWidgetSimple
const CWidgetSimple = props => {

  const {
    children,
    className,
    cssModule,
    //
    header,
    text,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    'card', className
  ), cssModule)

  return (
    <div className={classes} {...attributes}>
      <div className="card-body text-center">
        { header && <div className="text-muted small text-uppercase font-weight-bold">
          {header}</div>}
        { text && <div className="h2 py-3">{text}</div>}
        { children }
      </div>
    </div>
  )
}

CWidgetSimple.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  text: PropTypes.string
};

export default CWidgetSimple

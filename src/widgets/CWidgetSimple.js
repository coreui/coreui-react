import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CWidgetSimple
const CWidgetSimple = props => {

  const {
    children,
    className,
    //
    header,
    text,
    ...attributes
  } = props;

  const classes = classNames(
    'card', className
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string
};

export default CWidgetSimple

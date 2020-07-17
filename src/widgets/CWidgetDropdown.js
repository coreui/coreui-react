import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CWidgetDropdown

const CWidgetDropdown = props => {

  const {
    children,
    className,
    //
    header,
    color,
    footerSlot,
    text,
    ...attributes
  } = props;

  const classes = classNames(
    'card text-white', color && `bg-${color}`, className
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  color: PropTypes.string,
  footerSlot: PropTypes.node,
  text: PropTypes.string,
};

export default CWidgetDropdown

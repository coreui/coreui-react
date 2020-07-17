import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CWidgetIcon

const CWidgetIcon = props => {

  const {
    className,
    children,
    //
    header,
    text,
    iconPadding,
    color,
    footerSlot,
    ...attributes
  } = props;

  const classes = classNames(
    'card', color, className
  )

  return (
    <div className={classes} {...attributes}>
      <div className={`card-body d-flex align-items-center ${iconPadding ? 'p-3' : 'p-0'}`}>
        <div className={`mr-3 text-white bg-${color} ${iconPadding ? 'p-3' : 'p-4'}`}>
          {children}
        </div>
        <div>
          {header && <div className={`text-value text-${color}`}>{header}</div>}
          {text && <div className="text-muted text-uppercase font-weight-bold small">
            {text}</div>}
        </div>
      </div>
      { footerSlot }
    </div>
  )
}

CWidgetIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  header: PropTypes.string,
  text: PropTypes.string,
  iconPadding: PropTypes.bool,
  color: PropTypes.string,
  footerSlot: PropTypes.node
};

CWidgetIcon.defaultProps = {
  iconPadding: true
};

export default CWidgetIcon

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CWidgetIcon

const CWidgetIcon = props => {

  const {
    className,
    cssModule,
    children,
    //
    header,
    text,
    iconPadding,
    color,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    'card', color, className
  ), cssModule)

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
    </div>
  )
}

CWidgetIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  header: PropTypes.string,
  text: PropTypes.string,
  iconPadding: PropTypes.bool,
  color: PropTypes.string
};

CWidgetIcon.defaultProps = {
  iconPadding: true
};

export default CWidgetIcon

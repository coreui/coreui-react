import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CNav

const CNav = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    variant,
    vertical,
    justified,
    fill,
    inCard,
    ...attributes
  } = props

  const verticalClass = `flex${vertical === true ? '' : `-${vertical}`}-column`

  //render

  const classes = classNames(
    'nav',
    vertical && verticalClass,
    {
      [`nav-${variant}`]: variant,
      'nav-justified': justified,
      'nav-fill': fill,
      [`card-header-${variant}`]: inCard && variant
    },
    className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )

}

CNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  variant: PropTypes.oneOf(['', 'tabs', 'pills']),
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  inCard: PropTypes.bool
};

CNav.defaultProps = {
  tag: 'ul'
};

export default CNav

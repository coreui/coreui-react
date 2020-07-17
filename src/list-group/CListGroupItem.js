import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import CLink from '../link/CLink'

//component - CoreUI / CListGroupItem

const CListGroupItem = props => {

  let {
    tag: Tag,
    className,
    //
    innerRef,
    active,
    disabled,
    action,
    color,
    accent,
    ...rest
  } = props

  //render

  const classes = classNames(
    className, 'list-group-item',
    {
      'list-group-item-action': action||rest.href||rest.to||Tag=='button',
      active,
      disabled,
      [`list-group-item-${color}`]: color,
      [`list-group-item-accent-${accent}`]: accent
    }
  )

  if (props.href || props.to){
    return (
      <CLink {...rest} className={classes} innerRef={innerRef}/>
    )
  }
  else {
    return (
      <Tag {...rest} className={classes} ref={innerRef}/>
    )
  }

}

CListGroupItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  accent: PropTypes.string,
  action: PropTypes.bool
};

CListGroupItem.defaultProps = {
  tag: 'li'
};

export default CListGroupItem

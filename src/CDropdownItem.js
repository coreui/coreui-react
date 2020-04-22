import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'
import { Context } from './CDropdown'
import CLink from './CLink'

//component - CoreUI / CDropdownItem

const CDropdownItem = props => {

  let {
    tag,
    className,
    cssModule,
    //
    innerRef,
    onClick,
    color,
    divider,
    header,
    active,
    disabled,
    ...rest
  } = props

  const { setIsOpen } = useContext(Context)

  const isClickableItem = !(disabled || header || divider)

  const click = e => {
    if (!isClickableItem) {
      e.preventDefault()
      return
    } else {
      onClick && onClick(e)
      setIsOpen(false)
    }
  }


  //render

  const tabIndex = isClickableItem ? -1 : null
  const role = tabIndex === null ? 'menuitem' : undefined

  const classes = mapToCssModules(classNames(
    className,
    'dropdown-' + (header ? 'header' : divider ? 'divider' : 'item'),
    active && 'active',
    color && 'bg-' + color,
    { disabled }
  ), cssModule)

  const Tag = tag || (header || divider ? 'div' : CLink)


  return (
    <Tag
      className={classes}
      tabIndex={tabIndex}
      role={role}
      {...rest}
      onClick={click}
      ref={innerRef}
    />
  )

}

CDropdownItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default CDropdownItem

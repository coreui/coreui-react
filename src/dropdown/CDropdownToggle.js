import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import CButton from '../button/CButton'
import CLink from '../link/CLink'
import { Context } from './CDropdown'

//component - CoreUI / CDropdownToggle

const CDropdownToggle = props => {

  const {
    className,
    //
    innerRef,
    onClick,
    caret,
    split,
    tag,
    ...attributes
  } = props

  const {
    reference,
    setReference,
    isOpen,
    setIsOpen,
    inNav,
    setSplit
  } = useContext(Context)
  
  innerRef && innerRef(reference)

  useEffect(() => {
    setSplit(split)
  })

  const click = e => {
    if (props.disabled) {
      return
    }
    onClick && onClick(e)
    setIsOpen(!isOpen)
  }

  const Tag = tag || (inNav ? CLink : CButton)

  const classes = classNames(
    className,
    {
      'dropdown-toggle': caret && !split,
      'nav-link': inNav
    }
  )

  const togglerAttrs = {
    onClick: click,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'true',
    'aria-label': 'Dropdown toggle',
    [`${tag && typeof tag === 'string' ? 'ref' : 'innerRef'}`]: setReference,
    'role': Tag === CButton ? null : 'button'
  }

  if (split) {
    return (
      <React.Fragment>
        <CButton {...attributes}>
          {props.children}
        </CButton>
        <CButton
          className='dropdown-toggle dropdown-toggle-split'
          {...togglerAttrs}
          {...attributes}
        >{''}</CButton>
      </React.Fragment>
    )
  } else {
    return (
      <Tag
        className={classes}
        {...togglerAttrs}
        {...attributes}
      />
    )
  }
}

CDropdownToggle.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  caret: PropTypes.bool,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  disabled: PropTypes.bool
}

CDropdownToggle.defaultProps = {
  caret: true
}

export default CDropdownToggle

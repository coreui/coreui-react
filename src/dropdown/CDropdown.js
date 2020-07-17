import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

export const Context = React.createContext({})

//component - CoreUI / CDropdown

const CDropdown = props => {

  const {
    className,
    tag,
    //
    innerRef,
    inNav,
    ...attributes
  } = props


  const [reference, setReference] = useState()
  const [isOpen, setIsOpen] = useState()
  const [split, setSplit] = useState()
  const [placement, setPlacement] = useState('')

  const carretClass = placement.includes('top') ? 'dropup' :
    placement.includes('right') ? 'dropright' :
    placement.includes('left') ? 'dropleft' : 'dropdown'

  const Tag = tag || (inNav ? 'li' : 'div')
  const classes = classNames(
    className,
    carretClass,
    { 'nav-item': inNav, 'btn-group': split, 'show': isOpen }
  )


  return (
    <Context.Provider value={{
      isOpen,
      setIsOpen,
      reference,
      setReference,
      inNav,
      setSplit,
      setPlacement
    }}>
      <Tag
        className={classes}
        {...attributes}
        ref={innerRef}
      />
    </Context.Provider>
  )
}

CDropdown.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  inNav: PropTypes.bool
}

export default CDropdown

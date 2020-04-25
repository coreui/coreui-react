import React from 'react'
import PropTypes from 'prop-types'

const renderItem = (item, i) => {
  const { _tag: Tag, _children, ...rest } = item
  const children = _children ? _children.map((child, i) => {
    return typeof child === 'object' ? renderItem(child, i) : child
  }) : ''
  return <Tag key={Tag + i} {...rest}>{children}</Tag>
}

//component - CoreUI / CCreateElement
const CCreateElement = props => {
  return (
    <>
      {props.items && props.items.map((item, i) => renderItem(item, i))}
    </>
  )
}

CCreateElement.propTypes = {
  items: PropTypes.array.isRequired
};

export default CCreateElement
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

//component - CoreUI / CCreateElement
const CCreateElement = ({ items, components = {} }) => {
  const renderItem = (item, i) => {
    const { _tag, _children, ...rest } = item
    const Tag = components[_tag] || _tag
    const children = _children ? _children.map((child, i) => {
      return typeof child === 'object' ? renderItem(child, i) : child
    }) : ''
    return <Tag key={Tag + i} {...rest}>{children}</Tag>
  }

  const generatedItems = useMemo(() => {
    return items && items.map((item, i) => renderItem(item, i))
  }, [JSON.stringify(items)])

  return (
    <React.Fragment>
      {generatedItems}
    </React.Fragment>
  )
}

CCreateElement.propTypes = {
  items: PropTypes.array.isRequired,
  components: PropTypes.object
};

export default CCreateElement
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
])

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`
};

//component - CoreUI / CCol
const CCol = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    widths,
    ...attributes
  } = props

  //render

  const colClasses = []
  widths.forEach((colWidth, i) => {
    let columnProp = props[colWidth]
    delete attributes[colWidth]
    if (!columnProp && columnProp !== '') {
      return
    }
    const isXs = !i
    if (typeof columnProp === 'object') {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size)

      colClasses.push(classNames({
        [colClass]: columnProp.size || columnProp.size === '',
        [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
      }))
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp)
      colClasses.push(colClass)
    }
  })

  if (!colClasses.length) {
    colClasses.push('col')
  }

  const classes = classNames(
    className,
    colClasses
  )

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  )

}

CCol.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes.array
}

CCol.defaultProps = {
  tag: 'div',
  widths: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
}

export default CCol

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CRow
const CRow = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    gutters,
    form,
    alignHorizontal,
    alignVertical,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    !gutters ? 'no-gutters' : null,
    alignHorizontal ? `justify-content-${alignHorizontal}` : null,
    alignVertical ? `align-${alignVertical}` : null,
    form ? 'form-row' : 'row'
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CRow.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  gutters: PropTypes.bool,
  form: PropTypes.bool,
  alignHorizontal: PropTypes.string,
  alignVertical: PropTypes.string
};

CRow.defaultProps = {
  tag: 'div',
  gutters: true
};

export default CRow

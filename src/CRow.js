import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CRow
const CRow = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    gutters,
    form,
    alignHorizontal,
    alignVertical,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    !gutters ? 'no-gutters' : null,
    alignHorizontal ? `justify-content-${alignHorizontal}` : null,
    alignVertical ? `align-${alignVertical}` : null,
    form ? 'form-row' : 'row'
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CRow.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
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

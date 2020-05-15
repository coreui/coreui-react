/* eslint react/prop-types: 0 */
import React from 'react'
import CLink from '../link/CLink'

const CCardLink = props => {
  return (
    <CLink {...props} className={['card-link', props.className]}/>
  )
}

export default CCardLink

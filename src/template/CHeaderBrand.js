/* eslint react/prop-types: 0 */
import React from 'react'
import CBrand from '../utils/CBrand'

//component - CoreUI / CHeaderBrand

const CHeaderBrand = props => {
  return (
    <CBrand {...props} className={['c-header-brand', props.className]}/>
  )
}

export default CHeaderBrand

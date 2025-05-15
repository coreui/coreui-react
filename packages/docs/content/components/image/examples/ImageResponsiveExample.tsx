import React from 'react'
import { withPrefix } from 'gatsby'
import { CImage } from '@coreui/react'

export const ImageResponsiveExample = () => {
  return <CImage fluid src={withPrefix('/images/react.jpg')} />
}

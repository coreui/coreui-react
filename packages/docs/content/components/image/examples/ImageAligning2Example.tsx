import React from 'react'
import { withPrefix } from 'gatsby'
import { CImage } from '@coreui/react'

export const ImageAligning2Example = () => {
  return (
    <div className="clearfix">
      <CImage align="center" rounded src={withPrefix('/images/react400.jpg')} width={200} height={200} />
    </div>
  )
}

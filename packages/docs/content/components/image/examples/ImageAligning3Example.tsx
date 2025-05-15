import React from 'react'
import { withPrefix } from 'gatsby'
import { CImage } from '@coreui/react'

export const ImageAligning3Example = () => {
  return (
    <div className="text-center">
      <CImage rounded src={withPrefix('/images/react400.jpg')} width={200} height={200} />
    </div>
  )
}

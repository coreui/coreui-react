import React from 'react'
import { withPrefix } from 'gatsby'
import { CImage } from '@coreui/react'

export const ImageThumbnailExample = () => {
  return <CImage rounded thumbnail src={withPrefix('/images/react400.jpg')} width={200} height={200} />
}

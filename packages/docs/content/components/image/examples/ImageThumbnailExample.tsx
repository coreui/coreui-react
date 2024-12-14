import React from 'react'
import { CImage } from '@coreui/react'

import React400Img from './../../../assets/images/react400.jpg'

export const ImageThumbnailExample = () => {
  return <CImage rounded thumbnail src={React400Img} width={200} height={200} />
}

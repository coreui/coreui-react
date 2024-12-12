import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

import AngularImg from './../../../assets/images/angular.jpg'
import ReactImg from './../../../assets/images/react.jpg'
import VueImg from './../../../assets/images/vue.jpg'

export const CarouselCrossfadeExample = () => {
  return (
    <CCarousel controls transition="crossfade">
      <CCarouselItem>
        <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}

import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

export const CarouselWithIndicatorsExample = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/react.jpg'} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/vue.jpg'} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={'/assets/img/angular.jpg'} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  )
}

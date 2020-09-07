import React from 'react';
import CCarousel from '../src/carousel/CCarousel'
import CCarouselIndicators from '../src/carousel/CCarouselIndicators'
import CCarouselInner from '../src/carousel/CCarouselInner'
import CCarouselItem from '../src/carousel/CCarouselItem'
import CCarouselCaption from '../src/carousel/CCarouselCaption'
import CCarouselControl from '../src/carousel/CCarouselControl'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CCarousel'
};

export const basic = () => {
  const activeIndexOptions = [
    0,1,2,
  ]
  const activeIndex = select('Active index', activeIndexOptions, 0, 'Other')
  const animate = boolean('Animate', true, 'Other')
  const autoSlide = number('Auto slide', 2500, {}, 'Other')


  return <>
  <CCol lg="6" xs="12"> 
    <CCard>
      <CCardBody>
        <CCarousel 
          activeIndex={activeIndex}
          animate={animate}
          autoSlide={autoSlide}
        >
          <CCarouselIndicators/>
          <CCarouselInner>
            <CCarouselItem>
                <CCard color='primary' className="text-white">
                  <CCardBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                  </CCardBody>
                </CCard>
              <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CCard color='warning' className="text-white">
                  <CCardBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                  </CCardBody>
                </CCard>
              <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CCard color='dark' className="text-white">
                  <CCardBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                  </CCardBody>
                </CCard>
              <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
            </CCarouselItem>
          </CCarouselInner>
          <CCarouselControl direction="prev"/>
          <CCarouselControl direction="next"/>
        </CCarousel>
      </CCardBody>
    </CCard>
  </CCol>
  </>
};

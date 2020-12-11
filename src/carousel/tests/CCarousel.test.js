import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCarousel from '../CCarousel'
import CCarouselIndicators from '../CCarouselIndicators'
import CCarouselInner from '../CCarouselInner'
import CCarouselControl from '../CCarouselControl'
import CCarouselItem from '../CCarouselItem'
import CCarouselCaption from '../CCarouselCaption'

configure({ adapter: new Adapter() })

describe('CCarousel', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCarousel/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCarousel
        className='class-name'
        autoSlide={100}
        activeIndex={1}
        animate
      >
      </CCarousel>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('render full carousel', () => {
    const component = renderer.create(
      <CCarousel activeIndex={0}>
        <CCarouselIndicators/>
        <CCarouselInner>
          <CCarouselItem>
            Slide 1
            <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            Slide 2
            <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            Slide 3
            <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
          </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev"/>
        <CCarouselControl direction="next"/>
      </CCarousel>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('action on click carousel control', () => {
    const component = mount(
      <CCarousel activeIndex={0}>
        <CCarouselIndicators/>
        <CCarouselInner>
          <CCarouselItem>
            Slide 1
            <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            Slide 2
            <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            Slide 3
            <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
          </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev"/>
        <CCarouselControl direction="next"/>
      </CCarousel>
    );
    component.find('a').at(1).simulate('click')
    expect(component.find('.carousel-item').at(0).hasClass('active')).toBe(false)
    expect(component.find('.carousel-item').at(1).hasClass('active')).toBe(true)
    expect(component.find('.carousel-item').at(2).hasClass('active')).toBe(false)
    component.find('a').at(0).simulate('click')
    expect(component.find('.carousel-item').at(0).hasClass('active')).toBe(true)
    expect(component.find('.carousel-item').at(1).hasClass('active')).toBe(false)
    expect(component.find('.carousel-item').at(2).hasClass('active')).toBe(false)
  })
})

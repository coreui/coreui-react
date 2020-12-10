import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CPagination from '../CPagination'

configure({ adapter: new Adapter() })

describe('CPagination', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CPagination onActivePageChange={()=>{}}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CPagination
        onActivePageChange={()=>{}}
        className='class-name'
        addListClass='list-class'
        activePage={5}
        size='lg'
        firstButton='first-button'
        previousButton='previous-button'
        nextButton='next-button'
        lastButton='last-button'
        dots
        arrows
        doubleArrows
        limit={5}
        pages={15}
        align='end'
      >
        CPagination
      </CPagination>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly two', () => {
    const componentCustomized = renderer.create(
      <CPagination
        onActivePageChange={()=>{}}
        className='class-name'
        addListClass='list-class'
        activePage={5}
        size='lg'
        firstButton='first-button'
        previousButton='previous-button'
        nextButton='next-button'
        lastButton='last-button'
        dots
        arrows
        doubleArrows
        limit={30}
        pages={15}
        align='end'
      >
        CPagination
      </CPagination>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

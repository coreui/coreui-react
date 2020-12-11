import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CElementCover from '../CElementCover'

configure({ adapter: new Adapter() })

describe('CElementCover', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CElementCover/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CElementCover
        className='class-name'
        opacity={0.5}
      >
        CElementCover
      </CElementCover>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  /*
  //nonsenso test
  it('renders witch boundaries', () => {
    const ref = (a) => { 
      a['current'] = [];
      a['current']['parentElement'] = {
        getBoundingClientRect: (a) => {return a},
        querySelector: (a) => {return null}
      };
      return a 
    }
    const boundaries = ['some-class'];
    const component = renderer.create(
      <CElementCover
        className='class-name'
        opacity={0.5}
        boundaries={boundaries}
        innerRef={ref}
      >
        CElementCover
      </CElementCover>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  */
})

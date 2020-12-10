import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CScrollbar from '../CScrollbar'

configure({ adapter: new Adapter() })

describe('CScrollbar', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CScrollbar/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly - switcher on', () => {
    const componentCustomized = renderer.create(
      <div>
        <CScrollbar
          className='class-name'
          switcher={true}
        >
          CScrollbar
        </CScrollbar>
      </div>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  // todo
  // it('renders customized wrapper correctly - switcher off', () => {
  //   const componentCustomized = renderer.create(
  //     <CScrollbar
  //       className='class-name'
  //       switcher={false}
  //       settings={{}}
  //     >
  //       CScrollbar
  //     </CScrollbar>
  //   );
  //   let tree = componentCustomized.toJSON();
  //   expect(tree).toMatchSnapshot()
  // })
})

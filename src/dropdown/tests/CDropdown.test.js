import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CDropdown from '../CDropdown'

configure({ adapter: new Adapter() })

describe('CDropdown', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdown/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CDropdown
        className='class-name'
        inNav
      >
        CDropdown
      </CDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
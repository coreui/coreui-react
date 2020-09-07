import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

import CDropdownHeader from '../CDropdownHeader'

configure({ adapter: new Adapter() })

describe('CDropdownHeader', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdownHeader/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
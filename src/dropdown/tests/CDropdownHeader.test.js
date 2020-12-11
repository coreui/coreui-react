import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
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

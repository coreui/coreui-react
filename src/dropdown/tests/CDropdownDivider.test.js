import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CDropdownDivider from '../CDropdownDivider'

configure({ adapter: new Adapter() })

describe('CDropdownDivider', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdownDivider/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

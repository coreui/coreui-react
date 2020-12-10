import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCreateElement from '../CCreateElement'

configure({ adapter: new Adapter() })

describe('CCreateElement', () => {
  it('renders basic wrapper correctly', () => {
    const items = [
      {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'info',
          text: 'NEW',
        }
      },
    ]
    const component = renderer.create(<CCreateElement items={items} ></CCreateElement>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

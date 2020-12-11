import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CBreadcrumb from '../CBreadcrumb'
import CBreadcrumbItem from '../CBreadcrumbItem'

configure({ adapter: new Adapter() })

describe('CBreadcrumb', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CBreadcrumb/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CBreadcrumb
        className='class-name'
      >
        <CBreadcrumbItem

        >item</CBreadcrumbItem>
        <CBreadcrumbItem
          active
        >item 2</CBreadcrumbItem>
      </CBreadcrumb>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

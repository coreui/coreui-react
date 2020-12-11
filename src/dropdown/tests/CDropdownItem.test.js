import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CDropdownItem from '../CDropdownItem'
import CDropdownMenu from '../CDropdownMenu'
import CDropdownToggle from '../CDropdownToggle'
import CDropdown from '../CDropdown'


configure({ adapter: new Adapter() })

describe('CDropdownItem', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdownItem/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const onClick = () => {}
    const componentCustomized = renderer.create(
      <CDropdownItem
        className='class-name'
        onClick={onClick}
        color='warning'
        divider
        header
        active
        disabled
      >
        CDropdownItem
      </CDropdownItem>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on click', () => {
    const onClick = jest.fn();
    const component = mount(
      <CDropdown className="mt-2">
        <CDropdownToggle caret color="info">
          Dropdown button
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem
            onClick={onClick}
          >
            CDropdownItem
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
    component.find('a').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  })
  it('click on disabled', () => {
    const onClick = jest.fn();
    const component = mount(
      <CDropdown className="mt-2">
        <CDropdownToggle caret color="info">
          Dropdown button
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem
            onClick={onClick}
            disabled
          >
            CDropdownItem
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
    component.find('a').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(0);
  })
})

import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CDropdownToggle from '../CDropdownToggle'
import CDropdown from '../CDropdown'

configure({ adapter: new Adapter() })

describe('CDropdownToggle', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdown><CDropdownToggle/></CDropdown>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CDropdown>
        <CDropdownToggle
          className='class-name'
          caret
          disabled
        >
          CDropdownToggle
        </CDropdownToggle>
      </CDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper witch split', () => {
    const componentCustomized = renderer.create(
      <CDropdown>
        <CDropdownToggle
          className='class-name'
          caret
          disabled
          split
        >
          CDropdownToggle
        </CDropdownToggle>
      </CDropdown>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('on click', () => {
    const onClick = jest.fn();
    const component = mount(
      <CDropdown>
        <CDropdownToggle
          className='class-name'
          caret
          onClick={onClick}
        >
          CDropdownToggle
        </CDropdownToggle>
      </CDropdown>
    );
    component.find('button').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  })
  it('click on disabled', () => {
    const onClick = jest.fn();
    const component = mount(
      <CDropdown>
        <CDropdownToggle
          className='class-name'
          caret
          onClick={onClick}
          disabled
        >
          CDropdownToggle
        </CDropdownToggle>
      </CDropdown>
    );
    component.find('button').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(0);
  })
})

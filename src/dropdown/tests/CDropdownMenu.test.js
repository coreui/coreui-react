import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

///import CDropdownItem from '../CDropdownItem'
import CDropdownMenu from '../CDropdownMenu'
//import CDropdownToggle from '../CDropdownToggle'
//import CDropdown from '../CDropdown'

configure({ adapter: new Adapter() })

describe('CDropdownMenu', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CDropdownMenu>menu</CDropdownMenu>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  // todo
  // it('renders customized wrapper correctly', () => {
  //   const componentCustomized = renderer.create(
  //     <CDropdownMenu
  //       className='class-name'
  //       placement='left'
  //     >
  //       CDropdownMenu
  //     </CDropdownMenu>
  //   );
  //   let tree = componentCustomized.toJSON();
  //   expect(tree).toMatchSnapshot()
  // })
})

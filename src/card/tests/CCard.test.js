import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CCard from '../CCard'

configure({ adapter: new Adapter() })

describe('CCard', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CCard/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CCard
        className='class-name'
        color='warning'
        textColor="primary"
        borderColor='info'
        align="left"
        accentColor="danger"
      >
        CCard
      </CCard>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

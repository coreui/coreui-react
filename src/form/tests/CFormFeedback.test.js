import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CFormFeedback from '../CFormFeedback'
import {CValidFeedback, CInvalidFeedback} from '../CFormFeedback'

configure({ adapter: new Adapter() })

describe('CFormFeedback/CValidFeedback/CInvalidFeedback', () => {
  // todo
  // it('renders basic wrapper correctly', () => {
  //   const component = renderer.create(<CFormFeedback/>);
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot()
  // })
  // todo
  // it('renders customized wrapper correctly', () => {
  //   const componentCustomized = renderer.create(<CFormFeedback className='class-name' valid tooltip>CFormFeedback</CFormFeedback>
  //   );
  //   let tree = componentCustomized.toJSON();
  //   expect(tree).toMatchSnapshot()
  // })
  it('renders basic wrapper correctly CValidFeedback', () => {
    const component = renderer.create(<CValidFeedback/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly CValidFeedback', () => {
    const componentCustomized = renderer.create(
      <CValidFeedback
        className='class-name'
        tooltip
      >
      CValidFeedback
      </CValidFeedback>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders basic wrapper correctly CInvalidFeedback', () => {
    const component = renderer.create(<CInvalidFeedback/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly CInvalidFeedback', () => {
    const componentCustomized = renderer.create(
      <CInvalidFeedback
        className='class-name'
        tooltip
      >
      CInvalidFeedback
      </CInvalidFeedback>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

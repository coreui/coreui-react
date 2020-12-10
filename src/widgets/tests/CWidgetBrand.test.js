import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CWidgetBrand from '../CWidgetBrand'

configure({ adapter: new Adapter() })

describe('CWidgetBrand', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CWidgetBrand/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CWidgetBrand
        className='class-name'
        color='info'
        rightHeader='rh'
        rightFooter='rf'
        leftHeader='lh'
        leftFooter='lf'
        addHeaderClasses='header-classes'
      >
        CWidgetBrand
      </CWidgetBrand>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

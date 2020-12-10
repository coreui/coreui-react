import React from 'react'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer'

import CTabContent from '../CTabContent'

configure({ adapter: new Adapter() })

describe('CTabContent', () => {
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CTabContent className="class-name">
        CTabContent
      </CTabContent>
    )
    let tree = componentCustomized.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import { CInput, CTextarea, CInputFile, CInputCheckbox, CInputRadio, CSelect } from '../CInput'

configure({ adapter: new Adapter() })

describe('CInput', () => {
  it('renders basic wrapper correctly', () => {
    const component = renderer.create(<CInput/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('renders customized wrapper correctly', () => {
    const componentCustomized = renderer.create(
      <CInput
        className='class-name'
        type='number'
        valid
        invalid
        plaintext
        size='lg'
        sizeHtml='200'
      >
        CInput
      </CInput>
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

  describe('CInput-CTextarea', () => {
    it('renders basic wrapper correctly', () => {
      const component = renderer.create(<CTextarea/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot()
    })
    it('renders customized wrapper correctly', () => {
      const componentCustomized = renderer.create(
        <CTextarea
          className='class-name'
          valid
          invalid
          plaintext
          size='lg'
        >
          CTextarea
        </CTextarea>
      );
      let tree = componentCustomized.toJSON();
      expect(tree).toMatchSnapshot()
    })
  })

  describe('CInput-CInputFile', () => {
    it('renders basic wrapper correctly', () => {
      const component = renderer.create(<CInputFile/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot()
    })
    it('renders customized wrapper correctly', () => {
      const componentCustomized = renderer.create(
        <CInputFile
          className='class-name'
          valid
          invalid
          custom
        >
          CInputFile
        </CInputFile>
      );
      let tree = componentCustomized.toJSON();
      expect(tree).toMatchSnapshot()
    })
  })

  describe('CInput-CInputCheckbox', () => {
    it('renders basic wrapper correctly', () => {
      const component = renderer.create(<CInputCheckbox/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot()
    })
    it('renders customized wrapper correctly', () => {
      const componentCustomized = renderer.create(
        <CInputCheckbox
          className='class-name'
          valid
          invalid
          custom
        >
          CInputCheckbox
        </CInputCheckbox>
      );
      let tree = componentCustomized.toJSON();
      expect(tree).toMatchSnapshot()
    })
  })

  describe('CInput-CInputRadio', () => {
    it('renders basic wrapper correctly', () => {
      const component = renderer.create(<CInputRadio/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot()
    })
    it('renders customized wrapper correctly', () => {
      const componentCustomized = renderer.create(
        <CInputRadio
          className='class-name'
          valid
          invalid
          custom
        >
          CInputRadio
        </CInputRadio>
      );
      let tree = componentCustomized.toJSON();
      expect(tree).toMatchSnapshot()
    })
  })

  describe('CInput-CSelect', () => {
    it('renders basic wrapper correctly', () => {
      const component = renderer.create(<CSelect/>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot()
    })
    it('renders customized wrapper correctly', () => {
      const componentCustomized = renderer.create(
        <CSelect
          className='class-name'
          valid
          invalid
          custom
          size='lg'
          sizeHtml='200'
        >
          CSelect
        </CSelect>
      );
      let tree = componentCustomized.toJSON();
      expect(tree).toMatchSnapshot()
    })
  })

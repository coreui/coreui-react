import React from 'react';
import CImg from '../src/image/CImg'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select, color } from '@storybook/addon-knobs';

export default {
  title: 'CImg'
};

export const basic = () => {

  const alt = text('Alt', '', 'Basic')
  const width = number('Width', 512, {}, 'Basic')
  const height = number('Height', 240, {}, 'Basic')
  const block = boolean('Block', false, 'Basic')
  const fluid = boolean('Fluid', false, 'Basic')
  const fluidGrow = boolean('Fluid grow', false, 'Basic')
  const shape = select('Shape', ['', 'rounded'], '', 'Basic')
  const thumbnail = boolean('Thumbnail', false, 'Basic')
  const align = select('Align', ['', 'left', 'right', 'center'], '', 'Basic')
  const placeholderColor = color('Placeholder color', 'transparent', 'Basic')

  return <>
    <CCol lg="6" md="8" sm="12">
      <CCard>
        <CCardBody>
          <CImg
            src="https://picsum.photos/1024/480/?image=54"
            alt={alt}
            width={width}
            height={height}
            block={block}
            fluid={fluid}
            fluidGrow={fluidGrow}
            shape={shape}
            thumbnail={thumbnail}
            align={align}
            placeholderColor={placeholderColor}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>

};

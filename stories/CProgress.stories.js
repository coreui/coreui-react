import React from 'react';
import CProgress from '../src/progress/CProgress'
import CProgressBar from '../src/progress/CProgressBar'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CProgress'
};

export const basic = () => {

  const colorOptions = [
    "",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, 'primary', 'Other')
  const size = select('Size', ['', 'sm', 'xs'], '', 'Other')
  const value = number('Value', 55, {}, 'Other')
  const max = number('Max', 100, {}, 'Other')
  const precision = number('Precision', 0, {}, 'Other')
  const animated = boolean('Animated', false, 'Other')
  const striped = boolean('Striped', false, 'Other')
  const showPercentage = boolean('Show percentage', false, 'Other')
  const showValue = boolean('Show value', false, 'Other')


return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CProgress
          color={color}
          size={size}
          value={value}
          max={max}
          precision={precision}
          animated={animated}
          striped={striped}
          showPercentage={showPercentage}
          showValue={showValue}
        />
      </CCardBody>
    </CCard>
  </CCol>
</>
}



export const progressBar = () => {

  const colorOptions = [
    "",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, 'primary', 'Bar one')
  const size = select('Size', ['', 'sm', 'xs'], '', 'Bar one')
  const value = number('Value', 30, {}, 'Bar one')
  const max = number('Max', 100, {}, 'Bar one')
  const precision = number('Precision', 0, {}, 'Bar one')
  const animated = boolean('Animated', false, 'Bar one')
  const striped = boolean('Striped', false, 'Bar one')
  const showPercentage = boolean('Show percentage', false, 'Bar one')
  const showValue = boolean('Show value', false, 'Bar one')

  const colorTwo = select('Color', colorOptions, 'warning', 'Bar two')
  const sizeTwo = select('Size', ['', 'sm', 'xs'], 'xs', 'Bar two')
  const valueTwo = number('Value', 30, {}, 'Bar two')
  const maxTwo = number('Max', 100, {}, 'Bar two')
  const precisionTwo = number('Precision', 0, {}, 'Bar two')
  const animatedTwo = boolean('Animated', false, 'Bar two')
  const stripedTwo = boolean('Striped', false, 'Bar two')
  const showPercentageTwo = boolean('Show percentage', false, 'Bar two')
  const showValueTwo = boolean('Show value', false, 'Bar two')

  const colorThree = select('Color', colorOptions, 'info', 'Bar three')
  const sizeThree = select('Size', ['', 'sm', 'xs'], '', 'Bar three')
  const valueThree = number('Value', 30, {}, 'Bar three')
  const maxThree = number('Max', 100, {}, 'Bar three')
  const precisionThree = number('Precision', 0, {}, 'Bar three')
  const animatedThree = boolean('Animated', true, 'Bar three')
  const stripedThree = boolean('Striped', true, 'Bar three')
  const showPercentageThree = boolean('Show percentage', true, 'Bar three')
  const showValueThree = boolean('Show value', true, 'Bar three')

return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
      <CProgress>
        <CProgressBar
          color={color}
          size={size}
          value={value}
          max={max}
          precision={precision}
          animated={animated}
          striped={striped}
          showPercentage={showPercentage}
          showValue={showValue}
        />
        <CProgressBar
          color={colorTwo}
          size={sizeTwo}
          value={valueTwo}
          max={maxTwo}
          precision={precisionTwo}
          animated={animatedTwo}
          striped={stripedTwo}
          showPercentage={showPercentageTwo}
          showValue={showValueTwo}
        />
        <CProgressBar
          color={colorThree}
          size={sizeThree}
          value={valueThree}
          max={maxThree}
          precision={precisionThree}
          animated={animatedThree}
          striped={stripedThree}
          showPercentage={showPercentageThree}
          showValue={showValueThree}
        />
      </CProgress>
      </CCardBody>
    </CCard>
  </CCol>
</>
}
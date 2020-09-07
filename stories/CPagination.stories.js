import React, { useState } from 'react';
import CPagination from '../src/pagination/CPagination'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CPagination'
};

export const basic = () => {

  const [currentPage, setActivePage] = useState(2)

  const dots = boolean('Dots', true, 'View')
  const arrows = boolean('Arrows', true, 'View')
  const doubleArrows = boolean('Double arrow', true, 'View')
  const size = select('Size', ['', 'sm', 'lg'], '', 'View')
  const align = select('Align', ['', 'start', 'center', 'end'], '', 'View')
  const pages = number('Pages', 10, {}, 'View')
  const limit = number('Limit', 5, {}, 'View')

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CPagination
            activePage={currentPage}
            onActivePageChange={(i) => setActivePage(i)}
            dots={dots}
            arrows={arrows}
            doubleArrows={doubleArrows}
            size={size}
            align={align}
            pages={pages}
            limit={limit}
          ></CPagination>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

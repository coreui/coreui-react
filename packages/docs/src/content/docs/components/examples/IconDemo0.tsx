import { useState } from 'react'
import { 
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane } from '@coreui/react'
import {CIcon, CIconSvg} from '@coreui/icons-react/src/index'
import { cilList, cilShieldAlt } from '@coreui/icons'
import * as icon from '@coreui/icons';

export const IconDemo0 = () => (
<>
<CIcon icon={cilList} size="xl" />
  <CIcon icon={cilShieldAlt} size="xl" />
</>
)

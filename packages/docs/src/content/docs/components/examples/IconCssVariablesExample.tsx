import type { CSSProperties } from 'react'
import { CIcon } from '@coreui/icons-react/src/index'
import { cilList } from '@coreui/icons'

export const IconCssVariablesExample = () => (
  <>
    <CIcon icon={cilList} size="xl" style={{ '--ci-primary-color': 'red' } as CSSProperties} />
    <CIcon icon={cilList} size="xl" style={{ '--ci-primary-color': 'green' } as CSSProperties} />
  </>
)

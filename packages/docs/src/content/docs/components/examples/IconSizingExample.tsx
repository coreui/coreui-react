import { CIcon } from '@coreui/icons-react/src/index'
import { cilList } from '@coreui/icons'

export const IconSizingExample = () => (
  <>
    <CIcon icon={cilList} size="sm" />
    <CIcon icon={cilList} />
    <CIcon icon={cilList} size="lg" />
    <CIcon icon={cilList} size="xl" />
    <CIcon icon={cilList} size="xxl" />
    <CIcon icon={cilList} size="3xl" />
  </>
)

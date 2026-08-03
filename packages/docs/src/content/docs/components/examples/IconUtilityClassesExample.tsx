import { CIcon } from '@coreui/icons-react/src/index'
import { cilList } from '@coreui/icons'

export const IconUtilityClassesExample = () => (
  <>
    <CIcon icon={cilList} size="xl" />
    <CIcon icon={cilList} className="text-primary" size="xl" />
    <CIcon icon={cilList} className="text-secondary" size="xl" />
    <CIcon icon={cilList} className="text-success" size="xl" />
    <CIcon icon={cilList} className="text-danger" size="xl" />
    <CIcon icon={cilList} className="text-warning" size="xl" />
    <CIcon icon={cilList} className="text-info" size="xl" />
  </>
)

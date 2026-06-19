import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbDividers3Example = () => {
  return (
    <CBreadcrumb style={{ '--cui-breadcrumb-divider': '""' }}>
      <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Library</CBreadcrumbItem>
    </CBreadcrumb>
  )
}

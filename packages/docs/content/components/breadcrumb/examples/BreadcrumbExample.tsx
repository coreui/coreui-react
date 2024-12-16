import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbExample = () => {
  return (
    <>
      <CBreadcrumb>
        <CBreadcrumbItem active>Home</CBreadcrumbItem>
      </CBreadcrumb>

      <CBreadcrumb>
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem active>Library</CBreadcrumbItem>
      </CBreadcrumb>

      <CBreadcrumb>
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
        <CBreadcrumbItem active>Data</CBreadcrumbItem>
      </CBreadcrumb>
    </>
  )
}

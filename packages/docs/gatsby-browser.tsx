import React, { ReactNode } from 'react'
import '@docsearch/css'
import DefaultLayout from './src/templates/DefaultLayout'
import DocsLayout from './src/templates/DocsLayout'
import './src/styles/styles.scss'
import './src/styles/search.scss'

export const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return <DefaultLayout>{element}</DefaultLayout>
}

export const wrapPageElement = ({ element, props }: { element: ReactNode; props: any }) => {
  const path = props.location.pathname
  if (path.endsWith('/bootstrap') || path.endsWith('/bootstrap/')) {
    require('./src/styles/bootstrap-examples.scss')
  }
  return <DocsLayout {...props}>{element}</DocsLayout>
}

import React from 'react'
import '@docsearch/css'
import DefaultLayout from './src/templates/DefaultLayout'
import './src/styles/styles.scss'

export const wrapPageElement = ({ element, props }) => {
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}

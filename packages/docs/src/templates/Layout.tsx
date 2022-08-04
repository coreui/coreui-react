import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Footer, Header } from './../components/'
import './../styles/styles.scss'
import { CContainer } from '@coreui/react/src/'

const DefaultLayout: FC = ({ children, ...props }) => {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer>{children}</CContainer>
        </div>
        <Footer />
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
}

DefaultLayout.displayName = 'DefaultLayout'

export default DefaultLayout

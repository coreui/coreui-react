import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Footer, Header, Seo, Sidebar } from './../components/'
import './../styles/styles.scss'
import { CContainer } from '@coreui/react/src/index'

const DefaultLayout: FC = ({ children, ...props }) => {
  return (
    <>
      <Helmet>
        <script src="https://media.ethicalads.io/media/client/ethicalads.min.js" />
      </Helmet>
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

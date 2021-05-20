/** @jsx jsx */
import { useRef, useState } from 'react'
import { jsx, Layout as BaseLayout, Main } from 'theme-ui'
import Helmet from 'react-helmet'
import { Global } from '@emotion/react'

import global from '~theme/global'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { MainContainer } from '../MainContainer'
import * as styles from './styles'

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const nav = useRef()

  return (
    <div className="d-flex">
      <Sidebar ref={nav} show={show} />
      <div className="wrapper flex-grow-1" data-coreui-reliant="sidebar">
        <Header onShow={() => setShow((s) => !s)} />
        <div className="container-lg my-md-4 flex-grow-1">
          <MainContainer data-testid="main-container">{children}</MainContainer>
        </div>
      </div>
      <Helmet>
        <script src="https://media.ethicalads.io/media/client/ethicalads.min.js"/>
      </Helmet>
    </div>
  )
}

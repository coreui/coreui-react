import React, { FC } from 'react'

import { CContainer, CFooter } from '../../index'
import pkg from './../../../package.json'

const Footer: FC = ({ ...props }) => {
  return (
    <CFooter className="docs-footer p-3 p-md-5 mt-5 text-center text-sm-start">
      <CContainer>
        <ul className="docs-footer-links ps-0 mb-3">
          <li className="d-inline-block">
            <a href="https://github.com/coreui">GitHub</a>
          </li>
          <li className="d-inline-block ms-3">
            <a href="https://twitter.com/core_ui">Twitter</a>
          </li>
          <li className="d-inline-block ms-3">
            <a href="https://community.coreui.io/">Community</a>
          </li>
        </ul>
        <p className="mb-0">
          CoreUI is designed as the extension of <a href="https://getbootstrap.com">Bootstrap</a>.
          Special thanks for{' '}
          <a href="https://getbootstrap.com/docs/5.0/about/team/">Bootstrap team</a> and{' '}
          <a href="https://github.com/twbs/bootstrap/graphs/contributors">
            Bootstrap&#39;s contributors
          </a>
          .
        </p>
        <p className="mb-0">
          Currently v{pkg.version}. Code licensed{' '}
          <a
            href="https://github.com/coreui/coreui/blob/main/LICENSE"
            target="_blank"
            rel="license noopener"
          >
            MIT
          </a>
          , docs{' '}
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="license noopener"
          >
            CC BY 3.0
          </a>
          .
        </p>
      </CContainer>
    </CFooter>
  )
}

Footer.displayName = 'Footer'

export default Footer

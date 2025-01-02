import React, { FC } from 'react'

import { CContainer, CFooter } from '@coreui/react'

// @ts-expect-error json file
import pkg from './../../package.json'

const Footer: FC = () => {
  return (
    <CFooter className="docs-footer py-md-5 mt-5 text-center text-sm-start">
      <CContainer lg className="px-4">
        <div className="docs-footer-links mb-3 d-flex flex-column flex-sm-row gap-3">
          <a href="https://github.com/coreui">GitHub</a>
          <a href="https://twitter.com/core_ui">Twitter</a>
          <span className="border-start border-start-2 d-none d-sm-flex"></span>
          <a href="https://coreui.io/bootstrap/">CoreUI (Vanilla)</a>
          <a href="https://coreui.io/angular/">CoreUI for Angular</a>
          <a href="https://coreui.io/vue/">CoreUI for Vue.js</a>
        </div>
        <p className="mb-0">CoreUI for React is Open Source UI Components Library for React.js.</p>
        <p className="mb-0">
          Currently v{pkg.version}. CoreUI code licensed{' '}
          <a
            href="https://github.com/coreui/coreui-react/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            MIT
          </a>
          , docs{' '}
          <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">
            CC BY 3.0
          </a>
          .{' '}
          <strong>
            CoreUI PRO requires a{' '}
            <a href="https://coreui.io/pricing/?framework=react&docs=footer">commercial license</a>.
          </strong>
        </p>
      </CContainer>
    </CFooter>
  )
}

Footer.displayName = 'Footer'

export default Footer

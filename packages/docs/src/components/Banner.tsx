import React, { FC } from 'react'
import { CLink } from '@coreui/react/src/index'

interface BannerProps {
  pro: boolean
}

const Banner: FC<BannerProps> = ({ pro }) => {
  return pro ? (
    <div className="bg-danger d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-danger p-4 pb-3 mb-5">
      <h3 className="mb-4">CoreUI PRO Component</h3>
      <p>
        To use this component you must have a CoreUI PRO license. Buy the{' '}
        <a href="https://coreui.io/pricing/?framework=react&docs=coreui-banner-pro">CoreUI PRO</a>{' '}
        and get access to all PRO components, features, templates, and dedicated support.
      </p>
    </div>
  ) : (
    <div className="bg-info d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-info p-4 pb-3 mb-5">
      <h3 className="mb-4">Support CoreUI Development</h3>
      <p>
        CoreUI is an MIT-licensed open source project and is completely free to use. However, the
        amount of effort needed to maintain and develop new features for the project is not
        sustainable without proper financial backing.
      </p>
      <p>You can support our Open Source software development in the following ways:</p>
      <ul>
        <li>
          Buy the{' '}
          <CLink href="https://coreui.io/pricing/?framework=react&docs=coreui-banner-free">
            CoreUI PRO
          </CLink>
          , and get access to PRO components, and dedicated support.
        </li>
        <li>
          <CLink href="https://opencollective.com/coreui" target="_blank">
            Became a sponsor
          </CLink>
          , and get your logo on BACKERS.md/README.md files or each site of this documentation
        </li>
        <li>
          Give us a star ⭐️ on{' '}
          <CLink href="https://github.com/coreui/coreui-react" target="_blank">
            Github
          </CLink>
          .
        </li>
      </ul>
    </div>
  )
}

Banner.displayName = 'Banner'

export default Banner

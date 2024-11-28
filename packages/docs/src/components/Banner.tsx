import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { CButton, CCol, CRow } from '@coreui/react'

interface BannerProps {
  preview?: boolean | string
  pro?: boolean
}

const Banner: FC<BannerProps> = ({ preview, pro }) => {
  return (
    <>
      {pro && (
        <div className="bg-info bg-opacity-10 border border-2 border-info rounded p-3 px-xl-4 mb-5">
          <CRow className="d-flex align-items-center flex-xl-nowrap">
            <CCol className="d-none d-xl-block p-0" xs={12} xl="auto">
              <StaticImage
                src="../assets/images/hex_react.png"
                alt="CoreUI PRO for React.js"
                height={160}
                width={160}
              />
            </CCol>
            <CCol className="px-lg-4" xs={12} md>
              This Component is a part of CoreUI PRO for React.js, an advanced UI library offering
              over 100 components designed for creating responsive, sleek, and powerful
              applications. Experience it yourself by signing up for a complimentary 7-day trial.
            </CCol>
            <CCol className="mt-3 mt-lg-0" xs={12} md="auto">
              <CButton
                className="text-nowrap text-white"
                color="danger"
                href="https://coreui.io/trial/?src=react-docs&cta=pro-banner"
              >
                Start Free Trial
              </CButton>
            </CCol>
          </CRow>
        </div>
      )}
      {preview && (
        <div className="bg-warning d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-warning p-4 pb-3 mb-5">
          <h3 className="mb-4">Alpha release</h3>
          <p>
            This component is in the Alpha phase and has an experimental API, which can be changed
            in the final release. If you want to use this component, please install{' '}
            <strong>@coreui/coreui-pro {preview}</strong> and{' '}
            <strong>@coreui/react-pro {preview}</strong>
          </p>
        </div>
      )}
    </>
  )
}

Banner.displayName = 'Banner'

export default Banner

import React from 'react'
import { cibFacebookF, cibGithub, cibInstagram, cibLinkedin, cibYoutube } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCol, CForm, CFormInput, CRow } from '@coreui/react'

import CoreUISignetImg from './../../assets/images/brand/coreui-signet.svg'

export default function ProFooter2() {
  return (
    <div>
      <CRow className="p-5">
        <CCol className="mb-5 mb-lg-0" lg={3}>
          <img src={CoreUISignetImg} alt="" width="44" height="48" />
          <div className="small text-body-secondary mt-3">
            Building elegant UI components to improve the world.
          </div>
        </CCol>
        <CCol xs={6} md={3} lg={{ span: 2, offset: 1 }}>
          <h3 className="fs-6 fw-semibold mb-3">Company</h3>
          <ul className="list-unstyled text-body-secondary">
            <li className="py-1">About us</li>
            <li className="py-1">Careers</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Contact</li>
          </ul>
        </CCol>
        <CCol xs={6} md={3} lg={2}>
          <h3 className="fs-6 fw-semibold mb-3">Product</h3>
          <ul className="list-unstyled text-body-secondary">
            <li className="py-1">Support</li>
            <li className="py-1">Download</li>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
          </ul>
        </CCol>
        <CCol xs={6} md={3} lg={2}>
          <h3 className="fs-6 fw-semibold mb-3">Services</h3>
          <ul className="list-unstyled text-body-secondary">
            <li className="py-1">Support</li>
            <li className="py-1">Download</li>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
          </ul>
        </CCol>
        <CCol xs={6} md={3} lg={2}>
          <h3 className="fs-6 fw-semibold mb-3">Legal</h3>
          <ul className="list-unstyled text-body-secondary">
            <li className="py-1">Cookies</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Licenses</li>
          </ul>
        </CCol>
      </CRow>
      <div className="d-flex align-items-center bg-body-tertiary py-4 px-5">
        <div className="me-auto">
          <h3 className="fs-6 fw-semibold">Join our newsletter</h3>
          <div className="small text-body-secondary">
            Get the most recent news, articles, and resources delivered to your inbox every week.
          </div>
        </div>
        <CForm className="row g-3">
          <CCol xs="auto">
            <CFormInput
              type="email"
              id="newsletter"
              placeholder="Enter your email"
              aria-describedby="exampleFormControlInputHelpInline"
            />
          </CCol>
          <CCol xs="auto">
            <CButton color="primary" type="submit">
              Subscribe
            </CButton>
          </CCol>
        </CForm>
      </div>
      <div className="d-flex flex-wrap align-items-center gap-3 text-body-secondary py-4 px-5">
        <div className="small me-auto">
          © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
        <div className="d-flex gap-3">
          <a href="#" className="link-secondary">
            <CIcon icon={cibFacebookF} size="lg" />
          </a>
          <a href="#" className="link-secondary">
            <CIcon icon={cibInstagram} size="lg" />
          </a>

          <a href="#" className="link-secondary">
            <CIcon icon={cibGithub} size="lg" />
          </a>
          <a href="#" className="link-secondary">
            <CIcon icon={cibYoutube} size="lg" />
          </a>
          <a href="#" className="link-secondary">
            <CIcon icon={cibLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </div>
  )
}

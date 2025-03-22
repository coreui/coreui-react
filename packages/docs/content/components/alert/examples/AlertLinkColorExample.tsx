import React from 'react'
import { CAlert, CAlertLink } from '@coreui/react'

export const AlertLinkColorExample = () => {
  return (
    <>
      <CAlert color="primary">
        A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="secondary">
        A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="success">
        A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="danger">
        A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="warning">
        A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="info">
        A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
      <CAlert color="light">
        A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
      <CAlert color="dark">
        A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
    </>
  )
}

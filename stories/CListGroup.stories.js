import React from 'react';
import CListGroup from '../src/list-group/CListGroup'
import CListGroupItem from '../src/list-group/CListGroupItem'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CListGroup'
};

export const knobs = () => {

  const colorOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, '', 'Item')
  const active = boolean('Active', false, 'Item')
  const disabled = boolean('Disabled', false, 'Item')
  const action = boolean('Action', false, 'Item')
  const accentOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const accent = select('Accent', accentOptions, '', 'Item')
  const flush = boolean('Flush', false, 'Group')
  const groupAccent = boolean('Accent', false, 'Group')


  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CListGroup
            flush={flush}
            accent={groupAccent}
          >
            <CListGroupItem
              color={color}
              active={active}
              disabled={disabled}
              action={action}
              accent={accent}
            >
              Lorem ipsum dolor cet emit
            </CListGroupItem>
            <CListGroupItem  
              color={color}
              active={active}
              disabled={disabled}
              action={action}
              accent={accent}
            >
              Lorem ipsum dolor cet emit
            </CListGroupItem>
            <CListGroupItem  
              color={color}
              active={active}
              disabled={disabled}
              action={action}
              accent={accent}
            >
              Lorem ipsum dolor cet emit
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

export const basic = () => {
  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CListGroup>
            <CListGroupItem href="#">
              This is a default list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="primary">
              This is a primary list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="secondary">
              This is a secondary list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="success">
              This is a success list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="danger">
              This is a danger list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="warning">
              This is a warning list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="info">
              This is a info list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="light">
              This is a light list group item
            </CListGroupItem>
            <CListGroupItem href="#" color="dark">
              This is a dark list group item
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
      </CCard>
    </CCol>
  </>

};

import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCustomContentExample = () => {
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#" active>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="text-body-secondary">Donec id elit non mi porta.</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-body-secondary">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit.
        </p>
        <small className="text-body-secondary">Donec id elit non mi porta.</small>
      </CListGroupItem>
    </CListGroup>
  )
}

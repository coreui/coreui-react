import React, { FC } from 'react'

export interface AddedInProps {
  version: string
}

const AddedIn: FC<AddedInProps> = ({ version }) => (
  <small className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2">
    Added in v{version}
  </small>
)

AddedIn.displayName = 'AddedIn'

export default AddedIn

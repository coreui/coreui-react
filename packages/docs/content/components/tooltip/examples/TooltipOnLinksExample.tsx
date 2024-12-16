import React from 'react'
import { CLink, CTooltip } from '@coreui/react'

export const TooltipOnLinksExample = () => {
  return (
    <p className="text-body-secondary">
      Tight pants next level keffiyeh
      <CTooltip content="Tooltip text">
        <CLink> you probably </CLink>
      </CTooltip>
      haven&#39;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
      Farm-to-table seitan, mcsweeney&#39;s fixie sustainable quinoa 8-bit american apparel
      <CTooltip content="Tooltip text">
        <CLink> have a </CLink>
      </CTooltip>
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel
      williamsburg marfa, four loko mcsweeney&#39;s cleanse vegan chambray. A really ironic artisan
      <CTooltip content="Tooltip text">
        <CLink> whatever keytar </CLink>
      </CTooltip>
      scenester farm-to-table banksy Austin
      <CTooltip content="Tooltip text">
        <CLink> twitter handle </CLink>
      </CTooltip>
      freegan cred raw denim single-origin coffee viral.
    </p>
  )
}

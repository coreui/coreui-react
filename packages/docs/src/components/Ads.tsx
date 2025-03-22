import React, { FC, useEffect, useRef } from 'react'

interface AdsProps {
  code: string
  location: string
  placement: string
}

export const Ads: FC<AdsProps> = ({ code, location, placement }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = ''
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`
      ref.current.appendChild(s)
    }
  }, [location])

  return <div className="carbonads-wrapper" ref={ref} />
}

Ads.displayName = 'Ads'

export default Ads

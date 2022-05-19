import React, { FC, useEffect, useRef } from 'react'

const Ads: FC = ({ code, placement }: { code: string; placement: string }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = ''
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`
      ref.current.appendChild(s)
    }
  }, [])

  return <div id="carbonads" className="my-3" ref={ref} />
}

Ads.displayName = 'Ads'

export default Ads

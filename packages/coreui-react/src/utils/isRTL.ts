const isRTL = (element?: HTMLElement | HTMLDivElement | null) => {
  if (document.documentElement.dir === 'rtl') {
    return true
  }

  if (element) {
    return element.closest('[dir="rtl"]') !== null
  }

  return false
}

export default isRTL

import { useEffect, useState, RefObject } from 'react'

const useStickyObserver = (
  sentinelRef: RefObject<HTMLElement>,
  options?: IntersectionObserverInit,
): boolean => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observerOptions = options || {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        setIsSticky(!entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(sentinel)

    return () => {
      observer.unobserve(sentinel)
    }
  }, [sentinelRef, options])

  return isSticky
}

export default useStickyObserver

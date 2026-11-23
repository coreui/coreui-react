import Swipe from '../swipe'

const touchEvent = (type: string, clientX: number): Event => {
  const event = new Event(type) as Event & { touches: { clientX: number }[] }
  event.touches = [{ clientX }]
  return event
}

const pointerEvent = (type: string, clientX: number): Event => {
  const event = new Event(type) as Event & { clientX: number; pointerType: string }
  event.clientX = clientX
  event.pointerType = 'touch'
  return event
}

describe('Swipe', () => {
  let element: HTMLElement
  const originalPointerEvent = window.PointerEvent

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
    // Force the touch-event path and make the helper consider touch supported.
    ;(window as unknown as { PointerEvent?: unknown }).PointerEvent = undefined
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 1, configurable: true })
  })

  afterEach(() => {
    element.remove()
    ;(window as unknown as { PointerEvent?: unknown }).PointerEvent = originalPointerEvent
  })

  it('reports support when touch points are available', () => {
    expect(Swipe.isSupported()).toBe(true)
  })

  it('calls onLeft when swiping left past the threshold', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    const onEnd = vi.fn()
    new Swipe(element, { onLeft, onRight, onEnd })

    element.dispatchEvent(touchEvent('touchstart', 200))
    element.dispatchEvent(touchEvent('touchmove', 100))
    element.dispatchEvent(touchEvent('touchend', 100))

    expect(onLeft).toHaveBeenCalledTimes(1)
    expect(onRight).not.toHaveBeenCalled()
    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  it('calls onRight when swiping right past the threshold', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(touchEvent('touchstart', 100))
    element.dispatchEvent(touchEvent('touchmove', 200))
    element.dispatchEvent(touchEvent('touchend', 200))

    expect(onRight).toHaveBeenCalledTimes(1)
    expect(onLeft).not.toHaveBeenCalled()
  })

  it('ignores swipes below the threshold', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(touchEvent('touchstart', 200))
    element.dispatchEvent(touchEvent('touchmove', 180))
    element.dispatchEvent(touchEvent('touchend', 180))

    expect(onLeft).not.toHaveBeenCalled()
    expect(onRight).not.toHaveBeenCalled()
  })

  it('does not treat a tap as a swipe', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(touchEvent('touchstart', 200))
    element.dispatchEvent(touchEvent('touchend', 200))

    expect(onLeft).not.toHaveBeenCalled()
    expect(onRight).not.toHaveBeenCalled()
  })

  it('keeps the swipe direction across several touchmove events', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(touchEvent('touchstart', 300))
    element.dispatchEvent(touchEvent('touchmove', 250))
    element.dispatchEvent(touchEvent('touchmove', 200))
    element.dispatchEvent(touchEvent('touchend', 200))

    expect(onLeft).toHaveBeenCalledTimes(1)
    expect(onRight).not.toHaveBeenCalled()
  })

  it('starts each gesture from zero after a cancelled touch', () => {
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(touchEvent('touchstart', 300))
    element.dispatchEvent(touchEvent('touchmove', 200))
    element.dispatchEvent(touchEvent('touchstart', 200))
    element.dispatchEvent(touchEvent('touchend', 200))

    expect(onLeft).not.toHaveBeenCalled()
    expect(onRight).not.toHaveBeenCalled()
  })

  it('does not treat a pointer tap as a swipe', () => {
    ;(window as unknown as { PointerEvent?: unknown }).PointerEvent = class {}
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(pointerEvent('pointerdown', 300))
    element.dispatchEvent(pointerEvent('pointerup', 300))

    expect(onLeft).not.toHaveBeenCalled()
    expect(onRight).not.toHaveBeenCalled()
  })

  it('calls onLeft when a pointer swipes left past the threshold', () => {
    ;(window as unknown as { PointerEvent?: unknown }).PointerEvent = class {}
    const onLeft = vi.fn()
    const onRight = vi.fn()
    new Swipe(element, { onLeft, onRight })

    element.dispatchEvent(pointerEvent('pointerdown', 300))
    element.dispatchEvent(pointerEvent('pointerup', 200))

    expect(onLeft).toHaveBeenCalledTimes(1)
    expect(onRight).not.toHaveBeenCalled()
  })

  it('stops detecting swipes after dispose', () => {
    const onLeft = vi.fn()
    const swipe = new Swipe(element, { onLeft })
    swipe.dispose()

    element.dispatchEvent(touchEvent('touchstart', 200))
    element.dispatchEvent(touchEvent('touchmove', 100))
    element.dispatchEvent(touchEvent('touchend', 100))

    expect(onLeft).not.toHaveBeenCalled()
  })
})

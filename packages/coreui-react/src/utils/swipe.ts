const SWIPE_THRESHOLD = 40
const POINTER_TYPE_TOUCH = 'touch'
const POINTER_TYPE_PEN = 'pen'
const CLASS_NAME_POINTER_EVENT = 'pointer-event'

export interface SwipeCallbacks {
  onLeft?: () => void
  onRight?: () => void
  onEnd?: () => void
}

/**
 * Detects horizontal swipe gestures on an element, using Pointer events when
 * available and falling back to Touch events otherwise. A modified port of the
 * vanilla `@coreui/coreui` swipe helper.
 */
class Swipe {
  private readonly element: HTMLElement
  private readonly callbacks: SwipeCallbacks
  private deltaX = 0
  private readonly supportPointerEvents = Boolean(window.PointerEvent)

  constructor(element: HTMLElement, callbacks: SwipeCallbacks = {}) {
    this.element = element
    this.callbacks = callbacks

    if (!element || !Swipe.isSupported()) {
      return
    }

    this.initEvents()
  }

  static isSupported(): boolean {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  }

  dispose(): void {
    this.element.removeEventListener('pointerdown', this.start)
    this.element.removeEventListener('pointerup', this.end)
    this.element.removeEventListener('touchstart', this.start)
    this.element.removeEventListener('touchmove', this.move)
    this.element.removeEventListener('touchend', this.end)
    this.element.classList.remove(CLASS_NAME_POINTER_EVENT)
  }

  private readonly start = (event: PointerEvent | TouchEvent): void => {
    if (!this.supportPointerEvents) {
      this.deltaX = (event as TouchEvent).touches[0].clientX
      return
    }

    if (this.eventIsPointerPenTouch(event as PointerEvent)) {
      this.deltaX = (event as PointerEvent).clientX
    }
  }

  private readonly move = (event: TouchEvent): void => {
    this.deltaX =
      event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.deltaX
  }

  private readonly end = (event: PointerEvent | TouchEvent): void => {
    if (this.eventIsPointerPenTouch(event as PointerEvent)) {
      this.deltaX = (event as PointerEvent).clientX - this.deltaX
    }

    this.handleSwipe()
    this.callbacks.onEnd?.()
  }

  private handleSwipe(): void {
    const absDeltaX = Math.abs(this.deltaX)

    if (absDeltaX <= SWIPE_THRESHOLD) {
      return
    }

    const direction = absDeltaX / this.deltaX

    this.deltaX = 0

    if (!direction) {
      return
    }

    if (direction > 0) {
      this.callbacks.onRight?.()
    } else {
      this.callbacks.onLeft?.()
    }
  }

  private eventIsPointerPenTouch(event: PointerEvent): boolean {
    return (
      this.supportPointerEvents &&
      (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)
    )
  }

  private initEvents(): void {
    if (this.supportPointerEvents) {
      this.element.addEventListener('pointerdown', this.start)
      this.element.addEventListener('pointerup', this.end)
      this.element.classList.add(CLASS_NAME_POINTER_EVENT)
    } else {
      this.element.addEventListener('touchstart', this.start)
      this.element.addEventListener('touchmove', this.move)
      this.element.addEventListener('touchend', this.end)
    }
  }
}

export default Swipe

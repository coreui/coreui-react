import React, {
  FC,
  HTMLAttributes,
  useContext,
  useState,
  useEffect,
  useRef,
  RefObject,
} from 'react'
import classNames from 'classnames'
import { Context } from './CCarousel'
import { Transition } from 'react-transition-group'

export interface CCarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string

  /**
   * Inner ref of main element. [docs]
   *
   * @type RefObject<HTMLDivElement> | {(a:RefObject<HTMLDivElement>): void}
   */
  innerRef?: RefObject<HTMLDivElement> | { (a: RefObject<HTMLDivElement>): void }
}

const getIndex = (el: HTMLDivElement | null): number =>
  el && el.parentNode ? Array.from(el.parentNode.children).indexOf(el) : 0

const getDirection = (state: object) => {
  if (state[2]) {
    return state[2] === 'next' ? 'right' : 'left'
  } else {
    return state[1] > state[0] ? 'right' : 'left'
  }
}

export const CCarouselItem: FC<CCarouselItemProps> = ({
  children,
  className,
  innerRef,
  ...rest
}) => {
  const { animate, state, itemNumber, setItemNumber, animating, setAnimating } = useContext(Context)

  const ref = typeof innerRef === 'object' ? innerRef : useRef<HTMLDivElement>(null)
  if (typeof innerRef === 'function') innerRef(ref)

  const [isIn, setIsIn] = useState<boolean>(false)

  const onEnter = () => {
    setAnimating(false)
  }
  const onEntering = () => {
    /* eslint-disable no-unused-vars */
    //const offsetHeight = ref.current.offsetHeight
    setAnimating(true)
    /* eslint-enable no-unused-vars */
  }
  const onExit = () => {
    setAnimating(false)
  }
  const onExiting = () => {
    setAnimating(true)
  }
  const onExited = () => {
    setAnimating(false)
  }

  // const nodeRef = React.useRef()

  useEffect(() => {
    if (!itemNumber) {
      let a = ref.current as HTMLDivElement
      if (a && a.parentNode) setItemNumber(a.parentNode.children.length)
    }
    setIsIn(state[1] === getIndex(ref.current))
  }, [state])

  // render

  if (!animate || state[0] === null) {
    const itemClasses = classNames('carousel-item', isIn && 'active', className)
    return (
      <div className={itemClasses} ref={ref} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <Transition
      timeout={600}
      in={isIn}
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      nodeRef={ref}
    >
      {(status) => {
        const direction = getDirection(state)
        const isActive = status === 'entered' || status === 'exiting'
        const directionClassName =
          (status === 'entering' || status === 'exiting') &&
          animating &&
          (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right')

        const orderClassName =
          status === 'entering' &&
          (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev')

        const itemClasses = classNames(
          'carousel-item',
          isActive && 'active',
          directionClassName,
          orderClassName,
          className,
        )

        return (
          <div className={itemClasses} ref={ref} {...rest}>
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

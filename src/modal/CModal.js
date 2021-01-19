import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

export const Context = React.createContext({})

const getTransitionClass = s => {
  return  s === 'entering' ? 'd-block' :
          s === 'entered' ? 'show d-block' :
          s === 'exiting' ? 'd-block' : ''
}

//animation fixes introduced thanks to Sirlordt
//component - CoreUI / CModal
const CModal = props => {

  const {
    innerRef,
    show,
    centered,
    size,
    color,
    borderColor,
    fade,
    backdrop,
    closeOnBackdrop,
    onOpened,
    onClosed,
    addContentClass,
    onClose,
    className,
    scrollable,
    ...attributes
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [modalTrigger, setModalTrigger] = useState(false)
  const modalClick = e => e.target.dataset.modal && closeOnBackdrop && close()

  useEffect(() => {
    setIsOpen(show)
  }, [show])

  const onKeypress = e => e.keyCode == '27' && close()

  useEffect(() => {
    isOpen && document.addEventListener('keydown', onKeypress)
    return () => document.removeEventListener('keydown', onKeypress)
  }, [isOpen])

  const close = () => {
    onClose && onClose()
    setIsOpen(false)
  }

  const onEntered = () => {
    setModalTrigger(document.querySelector(':focus'))
    nodeRef.current.focus()
    onOpened && onOpened()
  }

  const onExited = () => {
    modalTrigger && modalTrigger.focus()
    onClosed && onClosed()
  }

  const modalClasses = classNames(
    'modal overflow-auto fade', {
      [`modal-${color}`]: color
    },
    className
  )

  const dialogClasses = classNames(
    'modal-dialog', {
      'modal-dialog-scrollable': scrollable,
      'modal-dialog-centered': centered,
      [`modal-${size}`]: size
    }
  )

  const contentClasses = classNames(
    'modal-content', {
      [`border-${borderColor}`]: borderColor,
    },
    addContentClass
  )

  const backdropClasses = classNames({
    'modal-backdrop': true,
    'fade': fade,
    'show': isOpen || fade
  })

  const nodeRef = useRef(null)
  return (
    <div onClick={modalClick}>
      <Transition
        in={Boolean(isOpen)}
        onEntered={onEntered}
        onExited={onExited}
        timeout={fade ? 150 : 0}
        nodeRef={nodeRef}
      >
        {(status) => {
          let transitionClass = getTransitionClass(status)
          const classes = classNames(
            modalClasses,
            transitionClass
          )
          return (
            <div
              tabIndex="-1"
              role="dialog"
              className={classes}
              data-modal={true}
              ref={nodeRef}
            >
              <div className={dialogClasses} role="document">
                <div
                  {...attributes}
                  className={contentClasses}
                  ref={innerRef}
                >
                  <Context.Provider value={{close}}>
                    {props.children}
                  </Context.Provider>
                </div>
              </div>
            </div>
          )
        }}

      </Transition>
      { backdrop && isOpen && <div className={backdropClasses}></div> }
    </div>
  )
}

CModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  show: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  backdrop: PropTypes.bool,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
  addContentClass: PropTypes.string,
  scrollable: PropTypes.bool,
}

CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true
}

export default CModal

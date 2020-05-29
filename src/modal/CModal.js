import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CFade from '../fade/CFade'

export const Context = React.createContext({})

//component - CoreUI / CModal
const CModal = props => {

  const {
    //
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
    ...attributes
  } = props

  const [isOpen, setIsOpen] = useState(show)
  const modalClick = e => e.target.dataset.modal && closeOnBackdrop && close()

  useEffect(() => {
    setIsOpen(show)
  }, [show])


  const close = () => {
    onClose && onClose()
    setIsOpen(false)
  }

  const onEntered = () => onOpened && onOpened()

  const onExited = () => onClosed && onClosed()

  const transitionProps = {
    baseClass: fade ? 'fade d-block' : '',
    baseClassActive: 'show',
    timeout: fade ? 150 : 0,
    unmountOnExit: true
  }

  const modalClasses = classNames(
    'modal overflow-auto', {
      [`modal-${color}`]: color
    }
  )

  const dialogClasses = classNames(
    'modal-dialog', {
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

  return (
    <div onClick={modalClick}>
      <CFade
        {...transitionProps}
        in={Boolean(isOpen)}
        onEntered={onEntered}
        onExited={onExited}
        tabIndex="-1"
        role="dialog"
        className={modalClasses}
        data-modal={true}
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
      </CFade>
      { backdrop && isOpen && <div className={backdropClasses}></div> }
    </div>
  )
}

CModal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
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
  addContentClass: PropTypes.string
}

CModal.defaultProps = {
  backdrop: true,
  fade: true,
  closeOnBackdrop: true
}

export default CModal

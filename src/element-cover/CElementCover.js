import React, { useEffect, createRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSpinner from '../spinner/CSpinner'

//component - CoreUI / CElementCover
const CElementCover = props => {

  const {
    className,
    children,
    //
    innerRef,
    boundaries,
    opacity,
    ...attributes
  } = props

  const [customBoundaries, setCustomBoundaries] = useState({})
  const ref = createRef(null)
  innerRef && innerRef(ref)

  const getCustomBoundaries = () => {
    if (!ref || !ref.current || !boundaries) {
      return {}
    }
    const parent = ref.current.parentElement
    const parentCoords = parent.getBoundingClientRect()
    const customBoundaries = {}
    boundaries.forEach(({sides, query}) => {
      const element = parent.querySelector(query)
      if (!element || !sides) {
        return
      }
      const coords = element.getBoundingClientRect()
      sides.forEach(side => {
        const sideMargin = Math.abs(coords[side] - parentCoords[side])
        customBoundaries[side] = sideMargin + 'px'
      })
    })
    return customBoundaries
  }

  useEffect(() => {
    setCustomBoundaries(getCustomBoundaries())
  }, [JSON.stringify(getCustomBoundaries())])

  //render
  const classes = classNames(className)

  const containerCoords = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...customBoundaries
  }

  const coverStyles = {
    ...containerCoords,
    position: 'absolute',
    backgroundColor: `rgb(255,255,255,${opacity})`
  }

  return (
    <div 
      className={classes} 
      style={coverStyles} 
      {...attributes} 
      ref={ref}
    >
      { children ||  
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
        }}>       
          <CSpinner grow size="lg" color="primary"/>
        </div>
      }
    </div>
  )
}

CElementCover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  boundaries: PropTypes.array,
  opacity: PropTypes.number
};

CElementCover.defaultProps = {
  opacity: 0.4
};

export default CElementCover
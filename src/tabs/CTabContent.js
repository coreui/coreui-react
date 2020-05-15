import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
//component - CoreUI / CTabContent
export const Context = React.createContext()

const CTabContent = props => {

  const {
    className,
    //
    innerRef,
    fade,
    ...attributes
  } = props;

  // render
  const classes = classNames('tab-content',className)

  return (
    <Context.Provider value={fade}>
      <div className={classes} {...attributes} ref={innerRef}/>
    </Context.Provider>
  )
}

CTabContent.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fade: PropTypes.bool
}

CTabContent.defaultProps = {
  fade: true
}

export default CTabContent

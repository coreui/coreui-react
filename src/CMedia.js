import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

export const Context = React.createContext({});

//component - CoreUI / CMedia

const CMedia = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    asideRight,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    asideRight ? 'd-flex flex-row-reverse' : null,
    'media',
  ), cssModule);

  return (
    <Context.Provider value={{
      asideRight: asideRight
    }}>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </Context.Provider>
  );

}

CMedia.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  asideRight: PropTypes.bool
};

CMedia.defaultProps = {
  tag: 'div'
};

export default CMedia;

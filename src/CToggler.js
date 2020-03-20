import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
//import {Context} from './CDropdownCustom';

//component - CoreUI / CToggler

const CToggler = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    toggle,
    inHeader,
    inNavbar,
    ...attributes
  } = props;

  //const context = useContext(Context);

  //events
  const onClick = e=>{
    e.preventDefault();
    //if (context.toggle)
    //  context.toggle();
    if (toggle)
      toggle(e);
  }

  //render

  const togglerType = inNavbar ? 'navbar' : inHeader ? 'header' : null;

  const classes = mapToCssModules(classNames(
    className,
    togglerType ? `${togglerType}-toggler` : null,
  ), cssModule);

  if (!custom){
    const classesTrigger = mapToCssModules(classNames(
      togglerType ? `${togglerType}-toggler-icon` : null,
    ), cssModule);
    return (
      <Tag {...attributes} className={classes} onClick={onClick}>
        <span className={classesTrigger} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} onClick={onClick} ref={innerRef}>
      {children}
    </Tag>
  );

}

CToggler.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  inHeader: PropTypes.bool,
  inNavbar: PropTypes.bool,
  type: PropTypes.string,
  toggle: PropTypes.func
};

CToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};

export default CToggler;

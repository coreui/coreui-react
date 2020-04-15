import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import {Popper} from 'react-popper';
import {Context} from './CDropdownCustom';

//component - CoreUI / CDropdownMenu

const CDropdownMenu = props=>{

  const {
    className,
    children,
    cssModule,
    right,
    tag,
    flip,
    modifiers,
    persist,
    innerRef,
    ...attributes
  } = props;

  const noFlipModifier = { flip: { enabled: false } };

  const directionPositionMap = {
    up: 'top',
    left: 'left',
    right: 'right',
    down: 'bottom',
  };

  const context = useContext(Context);

  //render

  const classes = mapToCssModules(classNames(
    className,
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      'show': context.isOpen,
    }
  ), cssModule);

  let Tag = tag;
  let placement;
  let myModifiers = modifiers;

  if (persist || (context.isOpen && !context.inNavbar)) {
    Tag = Popper;
    const position1 = directionPositionMap[context.direction] || 'bottom';
    const position2 = right ? 'end' : 'start';
    placement = `${position1}-${position2}`;
    //attributes.component = tag;
    myModifiers = !flip ? {
      ...modifiers,
      ...noFlipModifier,
    } : modifiers;

    /*
    x-placement={attributes.placement}
    */
    return (
      <Tag
        placement = {placement}
        modifiers = {myModifiers}
      >
        {({ ref, style, placement, arrowProps }) => {
          //console.log(style, children);
          return (
            <div
              {...attributes}
              tabIndex="-1"
              role="menu"
              aria-hidden={!context.isOpen}
              className={classes}

              ref={innerRef}
              data-placement={placement}
            >
              {children}
            </div>
          )}
        }
      </Tag>
    );

  }

  return (
    <Tag
      tabIndex="-1"
      role="menu"
      {...attributes}
      aria-hidden={!context.isOpen}
      className={classes}
      x-placement={attributes.placement}
      ref={innerRef}
    >
      {children}
    </Tag>
  );

}


CDropdownMenu.propTypes = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  persist: PropTypes.bool,
};

CDropdownMenu.defaultProps = {
  tag: 'div',
  flip: true,
};

export default CDropdownMenu;

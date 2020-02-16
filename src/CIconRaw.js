import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';
import style from './CIcon.module.css';

//component - CoreUI / CIconRaw

const CIconRaw = props=>{

  const {
    className,
    //
    name,
    content,
    customClasses,
    size,
    src,
    title,
    use,
    ...attributes
  } = props;

  // methods

  const toCamelCase = (str)=>{
    return str.replace(/([-_][a-z0-9])/ig, ($1) => {
      return $1.toUpperCase().replace('-', '')
    })
  }

  //vars

  const iconName = (()=>{
    const iconNameIsKebabCase = name && name.includes('-')
    return iconNameIsKebabCase ? toCamelCase(name) : name
  })();
  const titleCode = (()=>{
      return title ? `<title>${title}</title>` : ''
  })();
  const code = (()=>{
    if (content) {
      return content
    } else if (React.icons) {
      return React.icons[iconName] ? React.icons[iconName] : console.log(iconName)
    }
    return content;
  })();
  const iconCode = (()=>{
    return Array.isArray(code) ? code[1] || code[0] : code
  })();
  const scale = (()=>{
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64'
  })();
  const viewBox = (()=>{
    return attributes.viewBox || `0 0 ${scale}`
  })();
  const computedSize = (()=>{
    const addCustom = !size && (attributes.width || attributes.height)
    return size === 'custom' || addCustom ? 'custom-size' : size
  })();
  //console.log(iconName, computedSize)
/*
  computedClasses () {
      const size = this.computedSize
      return this.customClasses || ['c-icon', { [`c-icon-${size}`]: size }]
    }
*/

  //render

  const class1 = mapToCssModules(classNames(
    className,
    'c-icon',
    computedSize ? `c-icon-${computedSize}` : ''
  ));

  const class2 = mapToCssModules(classNames(
    'c-icon',
    computedSize ? `c-icon-${computedSize}` : ''
  ), style);

  const classes = customClasses || (class1 + ' ' + class2)

  //console.log(code, viewBox, classes, titleCode+' - '+iconCode);
  //v-html={titleCode+iconCode}

  return (
    <React.Fragment>
      {!src && !use ?
      <svg
        {...attributes}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className={classes}
        role="img"
        dangerouslySetInnerHTML={{__html: titleCode+iconCode}}
      ></svg> : src ?
      <img
        {...attributes}
        src={src}
        role="img"
      /> : use ?
      <svg
        {...attributes}
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        role="img"
      >
        <use href={use}></use>
      </svg> : ''}
    </React.Fragment>
  );

}

CIconRaw.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  name: PropTypes.string,
  content: PropTypes.oneOfType([String, Array]),
  size: PropTypes.oneOf(['custom', 'custom-size', 'sm', 'lg', 'xl',
      '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  customClasses: PropTypes.oneOfType([String, Array, Object]),
  src: PropTypes.string,
  title: PropTypes.string,
  use: PropTypes.string
};

CIconRaw.defaultProps = {
};

export default CIconRaw;

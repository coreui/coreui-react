import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CPaginationItem from './CPaginationItem';
import CPaginationLink from './CPaginationLink';

export const Context = React.createContext({});

//component - CoreUI / CPagination

const CPagination = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    listClassName,
    pageFrom,
    pageTo,
    pageMin,
    pageMax,
    activePage,
    size,
    firstButtonHtml,
    previousButtonHtml,
    nextButtonHtml,
    lastButtonHtml,
    hideDots,
    //hideArrows,
    //hideDoubleArrows,
    listTag: ListTag,
    'aria-label': label,
    listProps,
    onClick,
    ...attributes
  } = props;


  const paginationClick = (e, type, n)=>{
    onClick && onClick(e, type, n);
  }

  //render

  const classes = mapToCssModules(classNames(
    className
  ), cssModule);

  const listClasses = mapToCssModules(classNames(
    listClassName,
    'pagination',
    {
      [`pagination-${size}`]: !!size,
    }
  ), cssModule);

  let autoChildren;

  if (!custom){
    let list=[];
    let pageAutoFrom = pageFrom;
    let pageAutoTo = pageTo;
    if (!pageFrom || !pageTo){
      pageAutoFrom = activePage-3;
      pageAutoFrom < pageMin ? (pageAutoFrom = pageMin) : null;
      pageAutoTo = activePage+3;
      pageAutoTo > pageMax ? (pageAutoTo = pageMax) : null;
    }
    for (let i=pageAutoFrom;i<=pageAutoTo;i++)
      list.push(<CPaginationItem key={i} active={activePage==i?true:false}><CPaginationLink type="number" n={i}>{i}</CPaginationLink></CPaginationItem>);
    const pagesBefore = pageAutoFrom>pageMin;
    const pagesAfter = pageAutoTo<pageMax;
    autoChildren = (
      <React.Fragment>
        {pagesBefore&&firstButtonHtml?<CPaginationItem><CPaginationLink type="first">{firstButtonHtml}</CPaginationLink></CPaginationItem>:''}
        {pagesBefore&&previousButtonHtml?<CPaginationItem><CPaginationLink type="previous">{previousButtonHtml}</CPaginationLink></CPaginationItem>:''}
        {!hideDots&&pagesBefore?<CPaginationItem><CPaginationLink type="less">...</CPaginationLink></CPaginationItem>:''}
        {list}
        {!hideDots&&pagesAfter?<CPaginationItem><CPaginationLink type="more">...</CPaginationLink></CPaginationItem>:''}
        {pagesAfter&&nextButtonHtml?<CPaginationItem><CPaginationLink type="next">{nextButtonHtml}</CPaginationLink></CPaginationItem>:''}
        {pagesAfter&&lastButtonHtml?<CPaginationItem><CPaginationLink type="last">{lastButtonHtml}</CPaginationLink></CPaginationItem>:''}
      </React.Fragment>
    )
  }

  return (
    <Context.Provider value={{
      paginationClick
    }}>
      <Tag {...attributes} className={classes} aria-label={label} ref={innerRef}>
        <ListTag className={listClasses} {...listProps}>
          {autoChildren||children}
        </ListTag>
      </Tag>
    </Context.Provider>
  );

}

CPagination.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  pageMin: PropTypes.number,
  pageMax: PropTypes.number,
  pageFrom: PropTypes.number,
  pageTo: PropTypes.number,
  activePage: PropTypes.number,
  hideDots: PropTypes.bool,
  hideArrows: PropTypes.bool,
  hideDoubleArrows: PropTypes.bool,
  firstButtonHtml: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  previousButtonHtml: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  nextButtonHtml: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  lastButtonHtml: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.string,
  listTag: tagPropType,
  'aria-label': PropTypes.string,
  listClassName: PropTypes.string,
  listProps: PropTypes.object,
  onClick: PropTypes.func
};

CPagination.defaultProps = {
  custom: true,
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination',
  pageMin: 1,
  pageMax: 5,
  activePage: 2,
  hideDots: true,
  firstButtonHtml: <React.Fragment>&laquo;</React.Fragment>,
  previousButtonHtml: <React.Fragment>&lsaquo;</React.Fragment>,
  nextButtonHtml: <React.Fragment>&rsaquo;</React.Fragment>,
  lastButtonHtml: <React.Fragment>&raquo;</React.Fragment>,
};

export default CPagination;

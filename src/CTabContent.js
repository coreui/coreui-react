import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
//import {polyfill} from 'react-lifecycles-compat';

export const Context = React.createContext({});

//component - CoreUI / CTabContent

const CTabContent = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    activeTab: activeTabProp,
    ...attributes
  } = props;

  const [activeTab, setActiveTab] = useState(activeTabProp);

  if (activeTab!==activeTabProp)
    setActiveTab(activeTabProp);

  // render

  const classes = mapToCssModules(classNames(
    'tab-content',
    className),
    cssModule
  );

  return (
    <Context.Provider value={{
      activeTabId: activeTab
    }}>
      <Tag {...attributes} className={classes} ref={innerRef} />
    </Context.Provider>
  );

}

CTabContent.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  activeTab: PropTypes.any
};

CTabContent.defaultProps = {
  tag: 'div',
};

//polyfill(CTabContent);

export default CTabContent;

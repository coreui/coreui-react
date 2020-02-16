import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import {Context} from './CTabContent.js';

//component - CoreUI / CTabPane

const CTabPane = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    tabId,
    ...attributes
  } = props;

  const context = useContext(Context);

  //render

  const classes = mapToCssModules(classNames(
    'tab-pane',
    className,
    { 'active': tabId === context.activeTabId }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CTabPane.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  tabId: PropTypes.any
};

CTabPane.defaultProps = {
  tag: 'div',
};

export default CTabPane;

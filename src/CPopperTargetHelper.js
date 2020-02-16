import {useContext} from 'react';
import PropTypes from 'prop-types';
import {getTarget, targetPropType} from './Shared/helper.js';
import {Context} from './CPopperContent';

//component - CoreUI / CPopperTargetHelper

const CPopperTargetHelper = props=>{

  const context = useContext(Context);

  //render

  context.popperManager.setTargetNode(getTarget(props.target));
  return null;

}

CPopperTargetHelper.propTypes = {
  target: targetPropType.isRequired,
};

export default CPopperTargetHelper;

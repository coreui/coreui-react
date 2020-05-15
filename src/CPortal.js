// import {useEffect, useRef} from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import {canUseDOM} from './utils/helper.js';

// //component - CoreUI / CPortal

// const CPortal = props=>{

//   const fields = useRef({defaultNode: null}).current;

//   // effect

//   useEffect(() => {
//     return function cleanup() {
//       if (fields.defaultNode) {
//         document.body.removeChild(fields.defaultNode);
//       }
//       fields.defaultNode = null;
//     };
//   },
//   [fields.defaultNode]);

//   // render

//   if (!canUseDOM) {
//     return null;
//   }

//   if (!props.node && !fields.defaultNode) {
//     fields.defaultNode = document.createElement('div');
//     document.body.appendChild(fields.defaultNode);
//   }

//   return ReactDOM.createPortal(
//     props.children,
//     props.node || fields.defaultNode
//   );

// }

// CPortal.propTypes = {
//   children: PropTypes.node.isRequired,
//   //
//   node: PropTypes.any
// };

// export default CPortal;

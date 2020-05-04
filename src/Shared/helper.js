import PropTypes from 'prop-types';

let globalCssModule;

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
export const TransitionTimeouts = {
  Fade:     150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal:    300, // $modal-transition
  Carousel: 600, // $carousel-transition
};

export const PopperPlacements = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
export const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
];

export const TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED:  'entered',
  EXITING:  'exiting',
  EXITED:   'exited',
};

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const targetPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  DOMElement,
  PropTypes.shape({ current: PropTypes.any }),
]);

const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ]))
]);

export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

export function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}


export function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to `' +
        componentName +
        '`. Expected prop to be an instance of Element. Validation failed.'
    );
  }
}


const mapToCssModules = (className = '', cssModule = globalCssModule)=>{
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
}


function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      )
    }
    return propType(props, propName, componentName, ...rest);
  }
}

export { tagPropType, mapToCssModules, deprecated }
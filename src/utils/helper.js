import PropTypes from 'prop-types'

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
  'onExited'
];

export const CFadeProps = [
  ...TransitionPropTypeKeys,
  'baseClass',
  'baseClassActive',
  'tag'
]

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

export const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ]))
]);


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

export function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      console.error(
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      )
    }
    return propType(props, propName, componentName, ...rest);
  }
}
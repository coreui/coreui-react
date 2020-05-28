# CoreUI React components library

[![npm package][npm-badge]][npm]
[![npm next][npm-next]][npm]
[![NPM downloads][npm-download]][npm]

[npm-badge]: https://img.shields.io/npm/v/@coreui/react.png?style=flat-square
[npm-next]: https://img.shields.io/npm/v/@coreui/react/next.png?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/react
[npm-download]: https://img.shields.io/npm/dm/@coreui/react.svg?style=flat-square

##### @coreui/react v3 for [CoreUI 3 for React](https://coreui.io/react/)

###### Over 90 bootstrap based React components and directives

##### For library guide please visit our [Documentation site »](https://coreui.io/react/docs)

Check out demo of components usage: [CoreUI React Admin Template »](https://coreui.io/react/demo)

![Template](https://coreui.io/images/github/vue-free-template-3.gif)

### Installation

Before installation you need to install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your machine.
```shell
npm install @coreui/react
```

#### Styling

Components are styled using @coreui/coreui CSS library, but you can use them also with bootstrap CSS library. That is possible because @coreui/coreui library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem (template components, callout, switch).

Styles have to be imported separately! Import [CoreUI](https://github.com/coreui/coreui) CSS library (recommended), or [Bootstrap](https://getbootstrap.com/) library

Installation:
```shell
npm install @coreui/coreui
```

Styles usage:
```scss
@import "~@coreui/coreui/scss/coreui";
```

### Changelog
See the GitHub [release history](https://github.com/coreui/coreui-react/releases).

### Contributing
See [CONTRIBUTING.md](https://github.com/coreui/coreui-react/blob/master/CONTRIBUTING.md).

### Credits
Some design ideas and solutions in this library inspired by [reactstrap library](https://reactstrap.github.io/)


---
- bootstrapped with [nwb](https://github.com/insin/nwb) toolkit

#### `npm run` scripts

`package.json` is configured with `"scripts"` we can use with `npm run` while developing the project.

Command | Description |
--- | ---
`npm test` | run tests
`npm run test:coverage` | run tests and produce a code coverage report in `coverage/`
`npm run test:watch` | start a test server and re-run tests on every change
`npm run build` | prepare for publishing to npm
`npm run clean` | delete built resources

#### see also:
- [Developing React Components and Libraries with nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)

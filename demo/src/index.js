import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import {freeSet, flagSet, brandSet} from '@coreui/icons';

React.icons = {...freeSet, ...flagSet, ...brandSet}

ReactDOM.render(<App />, document.querySelector('#demo'))
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './polyfill'

ReactDOM.render(<App />, document.querySelector('#demo'))
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

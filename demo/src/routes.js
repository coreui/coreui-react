import Dashboard from './views/Dashboard/Dashboard.js';
import Full from './containers/DefaultLayout/DefaultLayout.js';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;

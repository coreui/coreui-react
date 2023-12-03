import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

//PORTICO
const Coretime = React.lazy(() => import('./views/coretime/Coretime'))
const RuntimeUpgrade = React.lazy(() => import('./views/runtime-upgrade/RuntimeUpgrade'))
const Empty = React.lazy(() => import('./views/empty/Empty'))
const Configurator = React.lazy(() => import('./views/configurator/Configurator'))
const ConfiguratorRuntime = React.lazy(() => import('./views/configurator-runtime/ConfiguratorRuntime'))
const ConfiguratorRuntimeSpecs = React.lazy(() => import('./views/configurator-runtime/ConfiguratorRuntimeSpecs'))
const ConfiguratorCollators = React.lazy(() => import('./views/configurator-collators/ConfiguratorCollators'))
const ConfiguratorCoretime = React.lazy(() => import('./views/configurator-coretime/ConfiguratorCoretime'))



const routes = [
  { path: '/', exact: true, name: 'Start Building' , element: Empty},
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/coretime', name: 'Coretime', element: Coretime },
  { path: '/runtime-upgrade', name: 'Runtime Upgrade', element: RuntimeUpgrade },
  { path: '/configure', name: 'Configure Deployment', element: Configurator },
  { path: '/configure/runtime', name: 'Runtime', element: ConfiguratorRuntime },
  { path: '/configure/runtime-specs', name: 'Runtime Specs', element:  ConfiguratorRuntimeSpecs},
  { path: '/configure/collators', name: 'Network Topology', element: ConfiguratorCollators },
  { path: '/configure/coretime', name: 'Coretime', element: ConfiguratorCoretime },


]

export default routes

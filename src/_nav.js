import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilWallet,
  cilMagnifyingGlass,
  cilCog
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle, CNavLink } from '@coreui/react'

const generateNav = (networkInfo, networkStatus) => {
  let relayChainValidators = [];
  let paraCollators = [];

  if (networkStatus === 'OK') {
    //this means that we have successfully launched the networks.
    //objective is to generate now the rest of the nav array with the information of the collators and validators
    relayChainValidators = networkInfo.relay.map(node => {
      return {
        component: CNavItem,
        name: node.name,
        to: `https://polkadot.js.org/apps/?rpc=${node.wsUri}#/explorer`
      }
    })

    for (const para in networkInfo.paras) {
      //each para is an an array of paranodes
      paraCollators = networkInfo.paras[para].map(node => {
        return {
          component: CNavItem,
          name: node.name,
          to: `https://polkadot.js.org/apps/?rpc=${node.wsUri}#/explorer`
        }
      }).sort((node1, node2) => Number(node1.name.split("-")[2]) - Number(node2.name.split("-")[2]))
    }
  }

  
  const nav = [
    {
     component: CNavTitle,
     name: "Account"
   },
   {
     component: CNavTitle,
     name: 'Current Deployment',
   },
   {
     component: CNavItem,
     name: 'Dashboard',
     to: '/dashboard',
     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   },
   {
     component: CNavItem,
     name: 'Coretime Credits',
     to: '/coretime',
     icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
   },
   {
     component: CNavItem,
     name: 'Runtime Upgrades',
     to: '/runtime-upgrade',
     icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
   },
   {
      component: CNavGroup,
        name: 'Explorer',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
        items: [
          {
            component: CNavGroup,
            name: 'Relaychain',
            items:relayChainValidators
          },
          {
            component: CNavGroup,
            name: 'Parachain',
            items:paraCollators
          }
        ]
   }
  ]

  return nav
  
}

export default generateNav

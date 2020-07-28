#!/usr/bin/env node

const pkg = require(require('path').resolve('./package.json'))

let packageJson = null
try {
 packageJson = require(require('path').resolve('../../../package.json'))
} catch (e) {

}

const log = console.log

const VERSIONS = {
  '@coreui/coreui': {
    url: 'https://coreui.io/pro/',
    name: 'CoreUI CSS library'
  },
  '@coreui/angular': {
    url: 'https://coreui.io/pro/angular/',
    name: 'CoreUI Angular components library',
    docs: 'https://coreui.io/angular/docs/'
  },
  '@coreui/react': {
    url: 'https://coreui.io/pro/react/',
    name: 'CoreUI React components library',
    docs: 'https://coreui.io/react/docs/introduction'
  },
  '@coreui/vue': {
    url: 'https://coreui.io/pro/vue/',
    name: 'CoreUI Vue components library',
    docs: 'https://coreui.io/vue/docs/introduction/'
  },
}

log('\x1b[32m')
log(`\x1b[1mThank you for using ${VERSIONS[pkg.name].name}! \x1b[22m`)
log(`${VERSIONS[pkg.name].name} is an MIT licensed open source project and ` +
`completely free to use. However, the amount of effort needed to maintain ` +
`and develop new features for the project is not sustainable without proper ` +
`financial backing. You can support development by buying Pro Version: ` +
`\x1b[4m${VERSIONS[pkg.name].url}\x1b[24m]`)
log('\x1b[39m')

const isFramework = VERSIONS[pkg.name].name !== '@coreui/coreui'
const haveStyles = packageJson && 
  packageJson.dependencies && 
    (
      packageJson.dependencies['@coreui/coreui'] ||
      packageJson.dependencies['@coreui/coreui-pro']
    )

if (isFramework && !haveStyles) {
  log(`\x1b[1m\x1b[31mError: You don't have '@coreui/coreui' CSS library installed in ` +
  `package.json dependencies section. You need to import it in order to style ` +
  `CoreUI components. Installation docs: ${VERSIONS[pkg.name].docs} \n \x1b[0m`
  )
  // ` \x1b[33m`
}

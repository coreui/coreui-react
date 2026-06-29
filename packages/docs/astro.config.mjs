import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import { coreuiDocs } from '@coreui/astro-docs/integration'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Live-src: point @coreui/react and its icon/chart submodules at their source in this
// repo. The icon data set (@coreui/icons) and chart.js stay published deps.
const reactSrc = fileURLToPath(new URL('../coreui-react/src/index.ts', import.meta.url))
const iconsReactSrc = fileURLToPath(new URL('../coreui-icons-react/src/index.ts', import.meta.url))
const reactChartjsSrc = fileURLToPath(new URL('../coreui-react-chartjs/src/index.ts', import.meta.url))
// @coreui/chartjs ships CJS `main` + a separate esm build; point imports at the esm
// so the named `customTooltips` export resolves under SSR.
const chartjsEsm = require.resolve('@coreui/chartjs/dist/js/coreui-chartjs.esm.js')
// Depth-independent imports for example + generated API data, so docs pages can
// move freely without rewriting relative paths.
const examples = fileURLToPath(new URL('./src/examples', import.meta.url))
const api = fileURLToPath(new URL('./src/api', import.meta.url))

export default defineConfig({
  // Publish URL (site + base) is config-driven: coreuiDocs() reads `seo.url` from
  // src/data/config.yml and sets Astro's `site` + `base` from it, so the versioned
  // (…/react/docs/5.x) and current (…/react/docs) builds differ by one config value.
  // coreuiDocs() detects the edition + wires styling; it returns an array (incl.
  // global component auto-import), so spread it — and place it before mdx().
  integrations: [react(), ...coreuiDocs(), mdx()],
  vite: {
    resolve: {
      // Array form: the icons-react `/src/index` subpath import must match before the
      // bare `@coreui/icons-react` entry.
      alias: [
        { find: '@coreui/icons-react/src/index', replacement: iconsReactSrc },
        { find: '@coreui/icons-react', replacement: iconsReactSrc },
        { find: '@coreui/react-chartjs', replacement: reactChartjsSrc },
        { find: '@coreui/chartjs', replacement: chartjsEsm },
        { find: '@coreui/react', replacement: reactSrc },
        { find: '@examples', replacement: examples },
        { find: '@api', replacement: api },
      ],
    },
  },
})

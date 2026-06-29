// Components to document. The @coreui/astro-docs-api-generator CLI (`yarn api`) runs the
// React extractor (react-docgen-typescript) and writes one <Name>.api.json per component
// into outDir — the shared ApiData shape the engine's <Api> renders. createApiConfig
// scans each root for source components (`C*.tsx`, minus declarations/specs/tests).
import { createApiConfig } from '@coreui/astro-docs-api-generator/config'

export default createApiConfig({
  framework: 'react',
  configUrl: import.meta.url,
  importPackage: '@coreui/react',
  roots: [
    '../coreui-react/src/components',
    '../coreui-react-chartjs/src',
    '../coreui-icons-react/src',
  ],
})

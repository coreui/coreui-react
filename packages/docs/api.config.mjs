// Components to document. The @coreui/astro-docs-api-generator CLI (`yarn api`) runs
// the React extractor (react-docgen-typescript) and writes one <Name>.api.json per
// component into outDir — the shared ApiData shape the engine's <Api> renders. The
// list is scanned from source (every `C*.tsx` that isn't a test); extra entries are
// harmless (a page only imports the JSON it references).
import { readdirSync } from 'node:fs'
import { join, dirname, basename, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const ROOTS = [
  '../coreui-react/src/components',
  '../coreui-react-chartjs/src',
  '../coreui-icons-react/src',
]

const isComponent = (name) => /^C[A-Z].*\.tsx$/.test(name) && !/\.(d|spec|test)\.tsx$/.test(name)

function scan(dir, out) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    if (e.name === '__tests__' || e.name.startsWith('.')) continue
    const p = join(dir, e.name)
    if (e.isDirectory()) scan(p, out)
    else if (isComponent(e.name)) out[basename(e.name, '.tsx')] = `./${relative(here, p)}`
  }
  return out
}

const components = {}
for (const root of ROOTS) scan(join(here, root), components)

export default {
  framework: 'react',
  outDir: 'src/api',
  importPackage: '@coreui/react',
  components,
}

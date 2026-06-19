// One-off: convert the Gatsby docs nav (src/nav.tsx) into the engine's sidebar.yml.
// The engine wants `{ title, icon (raw inner SVG), pages: [{ title, to, badge? }] }`;
// nav.tsx carries the same data as a JS array with the icon as <CIcon icon={[vb, svg]}/>.
// Run: node scripts/gen-sidebar.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const here = dirname(fileURLToPath(import.meta.url))
const NAV = join(here, '../../packages/docs/src/nav.tsx')
const OUT = join(here, '../src/data/sidebar.yml')

let src = readFileSync(NAV, 'utf8')
  .replace(/^import .*$/gm, '')
  // <CIcon … icon={['512 512', '<svg…>']} … /> -> the raw inner SVG string only.
  .replace(
    /icon:\s*\(\s*<CIcon[\s\S]*?icon=\{\[\s*'[^']*',\s*'([\s\S]*?)',?\s*\]\}[\s\S]*?\/>\s*\)/g,
    (_, svg) => `icon: ${JSON.stringify(svg)}`
  )
  .replace(/export default nav\s*;?/, '')

const nav = new Function(`${src}\n return nav;`)()

const groups = nav.map((group) => ({
  title: group.name,
  ...(group.icon ? { icon: group.icon } : {}),
  pages: (group.items ?? []).map((item) => ({
    title: item.name,
    to: item.to,
    ...(item.badge ? { badge: item.badge } : {}),
  })),
}))

writeFileSync(OUT, yaml.dump(groups, { lineWidth: -1, quotingType: '"', noRefs: true }))
console.log(`wrote ${OUT}: ${groups.length} groups, ${groups.reduce((n, g) => n + g.pages.length, 0)} pages`)

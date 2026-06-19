// React project scaffold for the StackBlitz/CodeSandbox buttons. This is the
// per-framework piece the engine injects: the engine owns the "open" logic, this
// builds the React (create-react-app) files for a given example.

interface ExampleData {
  code: string
  lang: string
  name: string
  componentName?: string
  pro?: boolean
}

export function buildProject(data: ExampleData) {
  const { code, lang, name, componentName = 'React Example', pro = false } = data

  const reactPkg = pro ? '@coreui/react-pro' : '@coreui/react'
  const cssPkg = pro ? '@coreui/coreui-pro' : '@coreui/coreui'
  const ext = lang === 'jsx' || lang === 'js' ? 'jsx' : 'tsx'
  const isTs = ext === 'tsx'
  const indexExt = isTs ? 'tsx' : 'js'

  const dependencies: Record<string, string> = {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
    [reactPkg]: 'latest',
    [cssPkg]: 'latest',
  }

  const indexCode = `import React from 'react'
import { createRoot } from 'react-dom/client'
import '${cssPkg}/dist/css/coreui.min.css'
import { ${name} } from './${name}'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="p-3">
      <${name} />
    </div>
  </React.StrictMode>
)
`

  const packageJson = JSON.stringify(
    {
      name: name.toLowerCase(),
      version: '0.0.0',
      private: true,
      dependencies: {
        ...dependencies,
        'react-scripts': 'latest',
        ...(isTs
          ? { typescript: '^5', '@types/react': '^18', '@types/react-dom': '^18' }
          : {}),
      },
      scripts: { start: 'react-scripts start', build: 'react-scripts build' },
      browserslist: ['>0.2%', 'not dead', 'not op_mini all'],
    },
    null,
    2
  )

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${componentName}</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`

  return {
    title: componentName,
    description: `CoreUI for React — ${componentName} example`,
    template: 'create-react-app',
    files: {
      'package.json': packageJson,
      'public/index.html': indexHtml,
      [`src/index.${indexExt}`]: indexCode,
      [`src/${name}.${ext}`]: code,
    },
    dependencies,
    openFile: `src/${name}.${ext}`,
  }
}

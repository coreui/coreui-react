import sdk, { Project } from '@stackblitz/sdk'
import {
  ProjectOptions,
  generateTitle,
  generateDescription,
  getDependencies,
  generateIndexHTML,
  generateIndexJS,
  generatePackageJSON,
} from './projectUtils'

// Define the options interface specific to StackBlitz
interface StackBlitzOptions extends ProjectOptions {
  language: 'js' | 'ts'
}

// Function to open a StackBlitz project
export const openStackBlitzProject = (options: StackBlitzOptions) => {
  const { code, componentName, language, name, pro = false } = options

  const title = generateTitle(componentName)
  const description = generateDescription(componentName)
  const template = 'create-react-app'

  const indexHTML = generateIndexHTML(title)
  const indexJS = generateIndexJS(name, language, pro, 'stackblitz')
  const packageJSON = generatePackageJSON(title, description, language, pro, code, 'stackblitz')

  const files = {
    'public/index.html': indexHTML,
    [`src/${name}.${language}x`]: code.replaceAll(
      '@assets/images/',
      '@coreui/projects-assets/images/',
    ),
    [`src/index.js`]: indexJS, // StackBlitz uses 'index.js' regardless of language
    'package.json': packageJSON,
  }

  const project: Project = {
    title,
    description,
    template,
    files,
    dependencies: getDependencies(language, pro, code),
    tags: ['coreui', 'react'],
  }

  sdk.openProject(project, { openFile: `src/index.${language === 'ts' ? 'tsx' : 'js'}` })
}

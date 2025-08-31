export interface ProjectOptions {
  code: string
  componentName?: string
  language: 'js' | 'ts'
  name: string
  pro: boolean
}

export const extractDependencies = (code: string, exclude: string[] = []) => {
  const importRegex = /import\s+(?:{[^}]+}|\S+)\s+from\s+["']([^"']+)["']/g
  const dependencies = []

  let match
  while ((match = importRegex.exec(code)) !== null) {
    const dependency = match[1]

    if (!exclude.includes(dependency) && !exclude.some((prefix) => dependency.startsWith(prefix))) {
      dependencies.push(dependency)
    }
  }

  return dependencies
}

// Function to generate title
export const generateTitle = (componentName?: string): string => {
  return componentName ? `${componentName} Example` : 'Project Preview'
}

// Function to generate description
export const generateDescription = (componentName?: string): string => {
  const baseURL = globalThis.location.href
  return componentName
    ? `${componentName} example from ${baseURL}`
    : `Official example from ${baseURL}`
}

// Function to generate dependencies
export const getDependencies = (
  language: 'js' | 'ts',
  pro: boolean,
  code: string
): Record<string, string> => {
  const dependencies: Record<string, string> = {
    ...(pro
      ? {
          '@coreui/coreui-pro': 'latest',
          '@coreui/react-pro': 'latest',
        }
      : {
          '@coreui/coreui': 'latest',
          '@coreui/react': 'latest',
        }),
    '@popperjs/core': 'latest',
    react: '~18.3',
    'react-dom': '~18.3',
    'react-scripts': 'latest',
  }

  const externalDependencies = extractDependencies(code, ['react', 'react-dom'])

  for (const dependency of externalDependencies) {
    dependencies[`${dependency}`] = 'latest'
  }

  if (language === 'ts') {
    dependencies['typescript'] = 'latest'
    dependencies['@types/jest'] = 'latest'
    dependencies['@types/node'] = 'latest'
    dependencies['@types/react'] = '~18.3'
    dependencies['@types/react-dom'] = '~18.3'
  }

  const sortedDependencies: Record<string, string> = {}
  const keys = Object.keys(dependencies).sort()
  for (const key of keys) {
    sortedDependencies[key] = dependencies[key]
  }

  return sortedDependencies
}

// Function to generate scripts
export const getScripts = (): Record<string, string> => {
  return {
    start: 'react-scripts start',
    build: 'react-scripts build',
  }
}

// Function to generate index.html content
export const generateIndexHTML = (title: string): string => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`
}

// Function to generate index.js or index.tsx content
export const generateIndexJS = (name: string, language: 'js' | 'ts', pro: boolean): string => {
  return `import React from 'react';
import * as ReactDOM from 'react-dom/client';
import '@coreui/${pro ? 'coreui-pro' : 'coreui'}/dist/css/coreui.min.css';
import { ${name} } from './${name}.${language}x';
  
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <div className="p-3">
      <${name} />
    </div>
  </React.StrictMode>
);`
}

// Function to generate package.json content
export const generatePackageJSON = (
  title: string,
  description: string,
  language: 'js' | 'ts',
  pro: boolean,
  code: string,
  templateType: 'codesandbox' | 'stackblitz'
): string => {
  const indexExtension = language === 'ts' ? 'tsx' : 'js'

  const packageJSON = {
    name: title.toLowerCase().replaceAll(/\s+/g, '-'),
    version: '1.0.0',
    description,
    main: templateType === 'codesandbox' ? `src/index.${indexExtension}` : `index.js`,
    scripts: getScripts(),
    dependencies: getDependencies(language, pro, code),
    ...(templateType === 'stackblitz' && {
      devDependencies: language === 'ts' ? getDependencies(language, pro, code) : {},
    }),
  }

  return JSON.stringify(packageJSON, null, 2)
}

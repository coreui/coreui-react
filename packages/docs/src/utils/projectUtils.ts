// projectUtils.ts

// Define a unified options interface
export interface ProjectOptions {
  code: string
  componentName?: string
  language: 'js' | 'ts'
  name: string
  pro: boolean
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
export const getDependencies = (language: 'js' | 'ts', pro: boolean): Record<string, string> => {
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
    react: 'latest',
    'react-dom': 'latest',
    'react-scripts': 'latest',
  }

  if (language === 'ts') {
    dependencies['typescript'] = 'latest'
    dependencies['@types/jest'] = 'latest'
    dependencies['@types/node'] = 'latest'
    dependencies['@types/react'] = 'latest'
    dependencies['@types/react-dom'] = 'latest'
  }

  return dependencies
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
export const generateIndexJS = (
  name: string,
  language: 'js' | 'ts',
  pro: boolean,
  templateType: 'codesandbox' | 'stackblitz',
): string => {
  const importReactDOM =
    templateType === 'codesandbox'
      ? `import ReactDOM from 'react-dom';`
      : `import * as ReactDOM from 'react-dom/client';`

  const renderMethod =
    templateType === 'codesandbox'
      ? `ReactDOM.render(
  <React.StrictMode>
    <div className="p-3">
      <${name} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);`
      : `ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <div className="p-3">
      <${name} />
    </div>
  </React.StrictMode>
);`

  return `import React from 'react';
${importReactDOM}
import '@coreui/${pro ? 'coreui-pro' : 'coreui'}/dist/css/coreui.min.css';
import { ${name} } from './${name}.${language}x';
  
${renderMethod}`
}

// Function to generate package.json content
export const generatePackageJSON = (
  title: string,
  description: string,
  language: 'js' | 'ts',
  pro: boolean,
  templateType: 'codesandbox' | 'stackblitz',
): string => {
  const indexExtension = language === 'ts' ? 'tsx' : 'js'

  const packageJSON = {
    name: title.toLowerCase().replaceAll(/\s+/g, '-'),
    version: '1.0.0',
    description,
    main: templateType === 'codesandbox' ? `src/index.${indexExtension}` : `index.js`,
    scripts: getScripts(),
    dependencies: getDependencies(language, pro),
    ...(templateType === 'stackblitz' && {
      devDependencies: language === 'ts' ? getDependencies(language, pro) : {},
    }),
  }

  return JSON.stringify(packageJSON, null, 2)
}

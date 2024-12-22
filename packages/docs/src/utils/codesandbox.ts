import {
  ProjectOptions,
  generateTitle,
  generateDescription,
  generateIndexHTML,
  generateIndexJS,
  generatePackageJSON,
} from './projectUtils'

// Define the options interface specific to CodeSandbox
interface CodeSandboxOptions extends ProjectOptions {
  language: 'js' | 'ts'
}

// Function to open a CodeSandbox project
export const openCodeSandboxProject = async (options: CodeSandboxOptions) => {
  const { code, componentName, language, name, pro = false } = options

  const title = generateTitle(componentName)
  const description = generateDescription(componentName)
  const template = 'create-react-app'

  const indexHTML = generateIndexHTML(title)
  const indexExtension = language === 'ts' ? 'tsx' : 'js'
  const indexJS = generateIndexJS(name, language, pro)
  const packageJSON = generatePackageJSON(title, description, language, pro, code, 'codesandbox')

  // Define the files structure
  const files: Record<string, { content: string }> = {
    'public/index.html': {
      content: indexHTML,
    },
    [`src/${name}.${language}x`]: {
      content: code.replaceAll('../../images/', 'https://assets.coreui.io/images/'),
    },
    [`src/index.${indexExtension}`]: {
      content: indexJS,
    },
    'package.json': {
      content: packageJSON,
    },
  }

  // Define the payload for CodeSandbox API
  const payload = {
    files,
    template,
    title,
    description,
  }

  try {
    // Make a POST request to CodeSandbox API
    const response = await fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Error creating sandbox: ${response.statusText}`)
    }

    const result = await response.json()

    // Open the sandbox in a new tab
    const sandboxURL = `https://codesandbox.io/s/${result.sandbox_id}`
    window.open(sandboxURL, '_blank')
  } catch (error) {
    console.error('Failed to create CodeSandbox:', error)
    alert('Failed to create CodeSandbox. Please check the console for more details.')
  }
}

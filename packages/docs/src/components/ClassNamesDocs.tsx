import React from 'react'
import Markdown from 'react-markdown'

const extractCLassNames = (code: string) => {
  const re = new RegExp(`export const .*CLASS_NAMES((?:.|\n)*?)}`)
  const captured = re.exec(code)[0]

  // Regular expression to match each comment block followed by a key-value pair
  const regexWithComments = /\/\*\*\s*([\s\S]*?)\s*\*\/\s*(\w+):\s*['"]([^'"]+)['"]/g

  // Regular expression to match key-value pairs without preceding comments
  const regexWithoutComments = /(^|\n)\s*(\w+):\s*['"]([^'"]+)['"]/g

  // Array to hold the resulting objects
  const classNamesArray = []

  // Temporary map to hold key-value pairs with their descriptions
  const tempMap = new Map()

  // First, extract all entries with comments
  let match
  while ((match = regexWithComments.exec(captured)) !== null) {
    const rawDescription = match[1]
    const description = rawDescription
      .split('\n')
      .map((line) => line.replace(/^\s*\*\s?/, '').trim())
      .join(' ')
      .replaceAll(/\s+/g, ' ')
      .trim()

    const className = match[2]
    const value = match[3]

    tempMap.set(className, { className, value, description })
  }

  // Now, extract all entries without comments
  while ((match = regexWithoutComments.exec(captured)) !== null) {
    const className = match[2]
    const value = match[3]

    // If this key was already processed with a comment, skip it
    if (tempMap.has(className)) continue

    classNamesArray.push({
      className,
      value,
      description: null, // or undefined
    })
  }

  // Add the entries with comments
  for (const entry of tempMap.values()) {
    classNamesArray.push(entry)
  }

  // Optional: Sort the array based on the order in the original string
  // This step ensures that entries appear in the array in the same order as in the object
  const orderedClassNames = []
  const lines = captured.split('\n')
  for (const line of lines) {
    const keyMatch = line.match(/^\s*(\w+):\s*['"]([^'"]+)['"]/)
    if (keyMatch) {
      const key = keyMatch[1]
      const entry = classNamesArray.find((item) => item.className === key)
      if (entry && !orderedClassNames.includes(entry)) {
        orderedClassNames.push(entry)
      }
    }
  }

  return classNamesArray
}

const ClassNamesDocs = ({ files }: { files: string | string[] }) => {
  const _files = Array.isArray(files) ? files : [files]

  const classNames = _files.flatMap((file) => {
    let _file

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      _file = require(`!!raw-loader!../../../../packages/coreui-react/src/${file}`)
      console.log('File loaded from coreui-react.')
    } catch {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        _file = require(`!!raw-loader!../../../../packages/coreui-react-pro/src/${file}`)
        console.log('File loaded from coreui-react-pro.')
      } catch {
        console.error('File not found in both paths.')
        _file = null // Set to null or handle as needed
      }
    }
    return extractCLassNames(_file.default)
  })

  const sortedClassNames = classNames.sort((a, b) => {
    if (a.className < b.className) return -1
    if (a.className > b.className) return 1
    return 0
  })

  return (
    <div className="table-api table-responsive border rounded mb-3">
      <table className="table">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sortedClassNames.map((className, index) => (
            <tr key={index}>
              <td>
                <code className="text-nowrap">.{className.value}</code>
              </td>
              <td>
                <Markdown>{className.description}</Markdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

ClassNamesDocs.displayName = 'ClassNamesDocs'

export default ClassNamesDocs

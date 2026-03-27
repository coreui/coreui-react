import React, { FC } from 'react'
// @ts-expect-error json file
import componentLinks from '@coreui/internal-links'

interface OtherFrameworksProps {
  frameworks: string[]
  title: string
}

interface ComponentLinks {
  [key: string]: {
    [key: string]: string
  }
}

const humanize = (text: string): string => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const OtherFrameworks: FC<OtherFrameworksProps> = ({ frameworks, title }) => {
  if (!frameworks || frameworks.length === 0) {
    return null
  }

  const otherFrameworks: ComponentLinks = { ...componentLinks }

  // Collect all available frameworks
  const frameworkSet = new Set(
    frameworks.flatMap((component) =>
      Object.keys(otherFrameworks[component] || {})
        .filter((fw) => fw !== 'react')
        .map((fw) => fw.charAt(0).toUpperCase() + fw.slice(1))
    )
  )
  const availableFrameworks = [...frameworkSet]
  availableFrameworks.sort()

  if (availableFrameworks.length === 0) {
    return null
  }

  const formatFrameworkList = () => {
    if (availableFrameworks.length === 1) {
      return availableFrameworks[0]
    }
    if (availableFrameworks.length === 2) {
      return `${availableFrameworks[0]} and ${availableFrameworks[1]}`
    }
    return `${availableFrameworks.slice(0, -1).join(', ')}, and ${availableFrameworks.at(-1)}`
  }

  return (
    <section aria-labelledby="other-frameworks-heading">
      <h2 id="other-frameworks-heading">Available in Other JavaScript Frameworks</h2>
      <p>
        CoreUI {title} is also available for {formatFrameworkList()}. Explore framework-specific
        implementations below:
      </p>
      <nav aria-label="Framework-specific component links">
        <ul>
          {frameworks.map((item) => (
            <React.Fragment key={item}>
              {Object.entries(otherFrameworks[item] || {})
                .filter(([key]) => key !== 'react')
                .map(([framework, url]) => (
                  <li key={framework}>
                    <a
                      href={url}
                      title={`View CoreUI ${humanize(item)} component for ${framework.charAt(0).toUpperCase() + framework.slice(1)}`}
                    >
                      {framework.charAt(0).toUpperCase() + framework.slice(1)} {humanize(item)}
                    </a>
                  </li>
                ))}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </section>
  )
}

OtherFrameworks.displayName = 'OtherFrameworks'

export default OtherFrameworks

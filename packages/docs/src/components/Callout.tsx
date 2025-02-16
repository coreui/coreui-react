import React, { FC, ReactNode } from 'react'
export interface CalloutProps {
  children: ReactNode
  color: string
  title?: string | ReactNode
  type?: string
}

const description = (type: string) => {
  switch (type) {
    case 'colorAssistiveTechnologies': {
      return (
        <>
          <h5>Conveying meaning to assistive technologies</h5>
          <p>
            Using color to add meaning only provides a visual indication, which will not be conveyed
            to users of assistive technologies – such as screen readers. Ensure that information
            denoted by the color is either obvious from the content itself (e.g. the visible text),
            or is included through alternative means, such as additional text hidden with the{' '}
            <code>.visually-hidden</code> class.
          </p>
        </>
      )
    }
    case 'dartSassModules': {
      return (
        <>
          <p>
            <strong>Heads up!</strong> Since <code>@coreui/coreui</code> v5.3.0 and{' '}
            <code>@coreui/coreui-pro</code> v5.10.0, we support Sass modules.
          </p>
          <p>
            You can now use the modern <code>@use</code> and <code>@forward</code> rules instead of{' '}
            <code>@import</code>, which is deprecated and will be removed in Dart Sass 3.0.0. Using{' '}
            <code>@import</code> will result in a compilation warning. You can learn more about this
            transition{' '}
            <a
              href="https://sass-lang.com/documentation/breaking-changes/import/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </>
      )
    }
    case 'dartSassDeprecations': {
      return (
        <>
          <p>
            <strong>
              Sass <code>@import</code> are deprecated and will be removed in Dart Sass 3.0.0.!
            </strong>
          </p>
          <p>
            You can also use <code>@import</code> rules, but please be aware that they are
            deprecated and will be removed in Dart Sass 3.0.0, resulting in a compilation warning.
            You can learn more about this deprecation{' '}
            <a
              href="https://sass-lang.com/documentation/breaking-changes/import/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </>
      )
    }
    default: {
      return ''
    }
  }
}

const Callout: FC<CalloutProps> = ({ children, color, title, type }) => {
  return (
    <div className={`docs-callout docs-callout-${color}`}>
      {type ? (
        description(type)
      ) : (
        <>
          {title && <h5>{title}</h5>}
          {children}
        </>
      )}
    </div>
  )
}

Callout.displayName = 'Callout'

export default Callout

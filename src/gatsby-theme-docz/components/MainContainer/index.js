/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { useDocs, useCurrentDoc } from 'docz'
import { Link } from 'gatsby'
import { get } from 'lodash/fp'

import * as styles from './styles'

const getHeadings = (route, docs) => {
  const doc = docs.find(doc => doc.route === route)
  const headings = get('headings', doc)
  return headings ? headings.filter(heading => heading.depth === 2) : []
}

const getCurrentHash = () => {
  if (typeof window === 'undefined') {
    return ''
  }
  return window.location ? decodeURI(window.location.hash) : ''
}

export const MainContainer = ({ children, ...rest }) => {
  const docs = useDocs()
  const current = useCurrentDoc()
  const headings = get('headings', current)
  const showHeadings = headings && headings.length > 0
  const currentHash = getCurrentHash()
  return (
    <Container sx={styles.container} {...rest}>
      <div className="docs-intro ps-lg-4" style={{ gridArea: 'intro' }}>
        <h1>{current.name}</h1>
        <p>{current.description}</p>
        <div data-ea-publisher="coreui-io" data-ea-type="image"></div>
      </div>
      <div
        className="docs-toc mt-4 mb-5 my-md-0 ps-xl-5 mb-lg-5 text-muted"
        style={{ 
          gridArea: 'toc',
          position: 'sticky',
          top: '5rem',
          right: 0,
          zIndex: 2,
          height: 'calc(100vh - 7rem)',
          overflowYy: 'auto'
        }}
      >
        <strong className="d-block h6 mb-2 pb-2 border-bottom">On this page</strong>
        {showHeadings && headings.map(heading => {
          return heading.depth < 4 && (
            <Link
              key={heading.slug}
              to={`#${heading.slug}`}
              className={currentHash === `#${heading.slug}` ? 'nav-link active' : 'nav-link'}
              style={{
                color: 'inherit',
                fontSize: '14px',
                lineHeight: '21px',
                padding: `0 0 0 ${(heading.depth-2)}rem`,
                marginBottom: '4px'
              }}
            >
              {heading.value}
            </Link>
          )
        })}
      </div>
      <div className="docs-content ps-lg-4" style={{ gridArea: 'content' }}>
        {children}
      </div>
    </Container>
  )
}

import React, { FC, useState } from 'react'
import { CCollapse, CNav } from '@coreui/react/src/index'

type TocItem = {
  url: string
  title: string
  items: TocItem[]
}

interface TocProps {
  items: TocItem[]
}

const toc = (items: TocItem[]) => {
  return (
    items &&
    items.map((item, index) => {
      if (Array.isArray(item.items)) {
        return (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
            <ul>{toc(item.items)}</ul>
          </li>
        )
      }
      return (
        <li key={index}>
          <a href={item.url}>{item.title}</a>
        </li>
      )
    })
  )
}

const Toc: FC<TocProps> = ({ items }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="docs-toc mt-4 mb-5 my-md-0 ps-xl-5 mb-lg-5 text-body-secondary">
      <button
        className="btn btn-link p-md-0 mb-2 mb-md-0 text-decoration-none docs-toc-toggle d-md-none"
        type="button"
        aria-expanded={visible ? true : false}
        aria-controls="tocContents"
        onClick={() => setVisible(!visible)}
      >
        On this page
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon d-md-none ms-2"
          aria-hidden="true"
          viewBox="0 0 512 512"
        >
          <polygon
            fill="var(--ci-primary-color, currentColor)"
            points="256 382.627 60.687 187.313 83.313 164.687 256 337.372 428.687 164.687 451.313 187.313 256 382.627"
            className="ci-primary"
          />
        </svg>
      </button>
      <strong className="d-none d-md-block h6 mb-2 pb-2 border-bottom">On this page</strong>
      <CCollapse className="docs-toc-collapse" id="tocContents" visible={visible}>
        <CNav as="nav">
          <ul>{toc(items)}</ul>
        </CNav>
      </CCollapse>
    </div>
  )
}

export default Toc

import React, { FC } from 'react'
import { CNav } from '@coreui/react/src/index'

type TocItem = {
  url: string
  title: string
  items: TocItem[]
}

interface TocProps {
  items: TocItem[]
}

const Toc: FC<TocProps> = ({ items }) => {
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

  return (
    <div className="docs-toc mt-4 mb-5 my-md-0 ps-xl-5 mb-lg-5 text-body-secondary">
      <strong className="d-block h6 mb-2 pb-2 border-bottom">On this page</strong>
      <CNav component="nav" className="flex-column">
        <ul>{toc(items)}</ul>
      </CNav>
    </div>
  )
}

export default Toc

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CLink from '../link/CLink'

//component - CoreUI / CPagination
const CPagination = props => {

  const {
    className,
    //
    innerRef,
    addListClass,
    activePage,
    size,
    firstButton,
    previousButton,
    nextButton,
    lastButton,
    dots,
    arrows,
    doubleArrows,
    limit,
    pages,
    align,
    onActivePageChange,
    ...attributes
  } = props;

  useEffect(() => {
    pages < activePage && onActivePageChange(pages, true)
  }, [pages])

  //render
  const listClasses = classNames(
    'pagination',
    size && 'pagination-' + size,
    'justify-content-' + align,
    addListClass
  )

  const backArrowsClasses = classNames(
    'page-item',
    activePage === 1 && 'disabled'
  )

  const nextArrowsClasses = classNames(
    'page-item',
    activePage === pages && 'disabled'
  )

  const showDots = (() => {
    return dots && limit > 4 && limit < pages
  })()
  const maxPrevItems = (() => {
    return Math.floor((limit - 1) / 2)
  })()
  const maxNextItems = (() => {
    return Math.ceil((limit - 1) / 2)
  })()
  const beforeDots = (() => {
    return showDots && activePage > maxPrevItems + 1
  })()
  const afterDots = (() => {
    return showDots && activePage < pages - maxNextItems
  })()
  const computedLimit = (() => {
    return limit - afterDots - beforeDots
  })()
  const range = (() => {
    return activePage + maxNextItems
  })()
  const lastItem = (() => {
    return range >= pages ? pages : range - afterDots
  })()
  const itemsAmount = (() => {
    return pages < computedLimit ? pages : computedLimit
  })()
  const items = (() => {
    if (activePage - maxPrevItems <= 1) {
      return Array.from({
        length: itemsAmount
      }, (v, i) => i + 1)
    } else {
      return Array.from({
        length: itemsAmount
      }, (v, i) => {
        return lastItem - i
      }).reverse()
    }
  })()

  const setPage = (number) => {
    if (number !== activePage) {
      onActivePageChange(number)
    }
  }

  return (
    <nav
      className={className}
      aria-label="pagination"
      {...attributes}
      ref={innerRef}
    >
      <ul className={listClasses}>
        { doubleArrows &&
          <li className={backArrowsClasses}>
            <CLink
              className="page-link"
              onClick={ () => setPage(1)}
              aria-label="Go to first page"
              aria-disabled={activePage === 1}
              disabled={activePage === 1}
            >
              { firstButton }
            </CLink>
          </li>
        }
        { arrows &&
          <li className={backArrowsClasses}>
            <CLink
              className="page-link"
              onClick={ () => setPage(activePage - 1)}
              aria-label="Go to previous page"
              aria-disabled={activePage === 1}
              disabled={activePage === 1}
            >
              { previousButton }
            </CLink>
          </li>
        }
        { beforeDots &&
          <li role="separator" className="page-item disabled">
            <span className="page-link">…</span>
          </li>
        }
        { items.map(i => {
            return (
            <li className={`${activePage===i ? 'active' : ''} page-item`} key={i}>
              <CLink
                className="page-link"
                onClick={(e) => setPage(i, e)}
                aria-label={activePage === i ? `Current page ${i}` : `Go to page ${i}`}
              >{i}</CLink>
            </li>)
          })
        }
        { afterDots &&
          <li role="separator" className="page-item disabled">
            <span className="page-link">…</span>
          </li>
        }
        { arrows &&
          <li className={nextArrowsClasses}>
            <CLink
              className="page-link"
              onClick={ () => setPage(activePage + 1)}
              aria-label="Go to next page"
              aria-disabled={activePage === pages}
              disabled={activePage === pages}
            >
              { nextButton }
            </CLink>
          </li>
        }
        { doubleArrows &&
          <li className={nextArrowsClasses}>
            <CLink
              className="page-link"
              onClick={ () => setPage(pages)}
              aria-label="Go to last page"
              aria-disabled={activePage === pages}
              disabled={activePage === pages}
            >
              { lastButton }
            </CLink>
          </li>
        }
      </ul>
    </nav>
  )

}

CPagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  activePage: PropTypes.number,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  doubleArrows: PropTypes.bool,
  firstButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  previousButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  nextButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  lastButton: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  addListClass: PropTypes.string,
  limit: PropTypes.number,
  pages: PropTypes.number,
  onActivePageChange: PropTypes.func.isRequired
};

CPagination.defaultProps = {
  activePage: 1,
  dots: true,
  arrows: true,
  doubleArrows: true,
  limit: 5,
  firstButton: <React.Fragment>&laquo;</React.Fragment>,
  previousButton: <React.Fragment>&lsaquo;</React.Fragment>,
  nextButton: <React.Fragment>&rsaquo;</React.Fragment>,
  lastButton: <React.Fragment>&raquo;</React.Fragment>,
  align: 'start',
  pages: 10
};

export default CPagination

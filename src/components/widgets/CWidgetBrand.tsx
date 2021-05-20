import React, { forwardRef, HTMLAttributes, ReactNode, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CCardHeader } from '../card/CCardHeader'
import { CCol } from '../grid/CCol'

export interface CWidgetBrandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  headerChildren?: string | ReactNode
  values?: Array<string | number> | Array<Array<string | number>>
}

export const CWidgetBrand = forwardRef<HTMLDivElement, CWidgetBrandProps>(
  ({ className, color, headerChildren, values, ...rest }, ref) => {
    const _className = classNames(className)
    const classNameHeader = classNames(
      'position-relative d-flex justify-content-center align-items-center',
      {
        [`bg-${color}`]: color,
      },
    )

    const generatedItems = useMemo(() => {
      return (
        values &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        values.map((value: any, index: number) => {
          return (
            <React.Fragment key={index}>
              {index % 2 !== 0 && <div className="vr"></div>}
              <CCol>
                <div className="fs-5 fw-semibold">{value[0]}</div>
                <div className="text-uppercase text-medium-emphasis small">{value[1]}</div>
              </CCol>
            </React.Fragment>
          )
        })
      )
    }, [JSON.stringify(values)])

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardHeader className={classNameHeader}>{headerChildren}</CCardHeader>
        <CCardBody className="row text-center">{generatedItems}</CCardBody>
      </CCard>
    )
  },
)

CWidgetBrand.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  headerChildren: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  values: PropTypes.arrayOf(PropTypes.any),
}

CWidgetBrand.displayName = 'CWidgetBrand'

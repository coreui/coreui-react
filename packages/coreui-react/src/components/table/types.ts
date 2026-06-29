import { CSSProperties } from 'react'

import { CTableDataCellProps } from '../table/CTableDataCell'
import { CTableHeaderCellProps } from '../table/CTableHeaderCell'
import { CTableRowProps } from '../table/CTableRow'

export type Column = {
  label?: string
  key: string
  _style?: CSSProperties
  _props?: CTableHeaderCellProps
}

export type FooterItem = {
  label?: string
  _props?: CTableDataCellProps
}

export type Item = {
  _cellProps?: Record<string, CTableDataCellProps | undefined>
  _props?: CTableRowProps
  [key: string]: unknown
}

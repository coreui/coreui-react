import {
  CBadge,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

export const VerticalAlignmentExample = () => {
  const columns = [
    {
      key: 'heading_1',
      _props: { className: 'w-25', scope: 'col' },
    },
    {
      key: 'heading_2',
      _props: { className: 'w-25', scope: 'col' },
    },
    {
      key: 'heading_3',
      _props: { className: 'w-25', scope: 'col' },
    },
    {
      key: 'heading_4',
      _props: { className: 'w-25', scope: 'col' },
    },
  ]
  const items = [
    {
      heading_1: (
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>
      ),
      heading_2: (
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>
      ),
      heading_3: (
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>
      ),
      heading_4:
        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
    },
    {
      heading_1: (
        <>
          This cell inherits <code>vertical-align: bottom;</code> from the table row
        </>
      ),
      heading_2: (
        <>
          This cell inherits <code>vertical-align: bottom;</code> from the table row
        </>
      ),
      heading_3: (
        <>
          This cell inherits <code>vertical-align: bottom;</code> from the table row
        </>
      ),
      heading_4:
        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
      _props: { align: 'bottom' },
    },
    {
      heading_1: (
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>
      ),
      heading_2: (
        <>
          This cell inherits <code>vertical-align: middle;</code> from the table
        </>
      ),
      heading_3: 'This cell is aligned to the top.',
      heading_4:
        'This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.',
      _cellProps: { heading_3: { align: 'top' } },
    },
  ]
  return <CTable align="middle" columns={columns} items={items} />
}

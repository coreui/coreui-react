import { CTable } from '@coreui/react'

export const VariantExample = () => {
  const columns = [
    { key: 'class', _props: { scope: 'col' } },
    { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
    { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
  ]
  const items = [
    {
      class: 'Default',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
    },
    {
      class: 'Primary',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'primary' },
    },
    {
      class: 'Secondary',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'secondary' },
    },
    {
      class: 'Success',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'success' },
    },
    {
      class: 'Danger',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'danger' },
    },
    {
      class: 'Warning',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'warning' },
    },
    {
      class: 'Info',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'info' },
    },
    {
      class: 'Light',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'light' },
    },
    {
      class: 'Dark',
      heading_1: 'Cell',
      heading_2: 'Cell',
      _cellProps: { class: { scope: 'row' } },
      _props: { color: 'dark' },
    },
  ]
  return <CTable columns={columns} items={items} />
}

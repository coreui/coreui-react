import React from 'react';
import CDataTable from '../src/table/CDataTable'
import CBadge from '../src/badge/CBadge'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text } from '@storybook/addon-knobs';

export default {
  title: 'CDataTable'
};

const fields = ['name','registered', 'role', 'status']
const usersData = [
  {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
  {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
  {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
  {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
  {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
  {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
  {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
  {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
  {id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
  {id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending'},
  {id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active'},
  {id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active'},
  {id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
  {id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
  {id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending'},
  {id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active'},
  {id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active'},
  {id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
  {id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
  {id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending'},
  {id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active'},
  {id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active'},
  {id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
  {id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending'},
  {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
]
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

export const simple = () =>
<CCol lg="6" xs="12">  
  <CCard>   
    <CCardBody>     
      <CDataTable
        items={usersData}
        fields={fields}
        itemsPerPage={5}
        pagination
        scopedSlots = {{
          'status':
            (item)=>(
              <td>
                <CBadge color={getBadge(item.status)}>
                  {item.status}
                </CBadge>
              </td>
            )

        }}
      />
    </CCardBody>
  </CCard>
</CCol>

export const full = () => {  

  const dark = boolean('Dark', false, 'View')
  const hover = boolean('Hover', false, 'View')
  const striped = boolean('Striped', false, 'View')
  const border = boolean('Bordered', false, 'View')
  const outlined = boolean('Outlined', false, 'View')
  const responsive = boolean('Responsive', true, 'View')
  const footer = boolean('Footer', false, 'View')
  const header = boolean('Header', true, 'View')

  const pagination = boolean('Pagination', false, 'Pagination')
  const itemsPerPageSelect = boolean('Items per page select', false, 'Pagination')
  const itemsPerPage = number('Items per page', 10, {}, 'Pagination')
  const pagActivePage = number('Pagination active page on start', 1, {}, 'Pagination')

  const loading = boolean('Loading', false, 'Other')
  const addTableClasses = text('Add table classes', '', 'Other')

  const sorter = boolean('Sorter', false, 'Sort and filter')
  //const clickableRows = boolean('Clickable rows', false, 'Sort and filter')
  const columnFilter = boolean('Column filter', false, 'Sort and filter')
  const tableFilter = boolean('Table filter', false, 'Sort and filter')
  const tableFilterValue = text('Table filter value', '', 'Sort and filter')

  return <CCol lg="6" xs="12">   
      <CCard>
        <CCardBody>
          <CDataTable
                    //data
                    items={usersData}
                    fields={fields}
                    //view
                    dark={dark}
                    hover={hover}
                    striped={striped}
                    border={border}
                    outlined={outlined}
                    responsive={responsive}
                    footer={footer}
                    header={header}
                    //pagination
                    itemsPerPage={itemsPerPage}
                    pagination={pagination}
                    itemsPerPageSelect={itemsPerPageSelect}
                    activePage={pagActivePage}
                    //other
                    loading={loading}
                    addTableClasses={addTableClasses}
                    //sort and filter
                    sorter={sorter}
                    //clickableRows={clickableRows}
                    columnFilter={columnFilter}
                    tableFilter={tableFilter}
                    tableFilterValue={tableFilterValue}
                    //scoped slots
                    scopedSlots = {{
                      'status':
                        (item)=>(
                          <td>
                            <CBadge color={getBadge(item.status)}>
                              {item.status}
                            </CBadge>
                          </td>
                        )
                    }}
          />
        </CCardBody>
      </CCard>
    </CCol>
}
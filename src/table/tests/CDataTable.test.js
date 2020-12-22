import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import renderer from 'react-test-renderer';

import CDataTable from '../CDataTable'

configure({ adapter: new Adapter() })

describe('CDataTable', () => {
    it('renders basic wrapper correctly', () => {
        const component = renderer.create(<CDataTable/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()
    })
  it('renders customized wrapper correctly', () => {
    const items = [
        {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
        {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
        {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
        {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
        {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
        {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
        {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    ]
    const fields = [
        { key: 'name', _style: { width: '40%'} },
        'registered',
        { key: 'role', _style: { width: '20%'} },
        { key: 'status', _style: { width: '20%'} },
        {
          key: 'show_details',
          label: '',
          _style: { width: '1%' },
          sorter: false,
          filter: false
        }
    ]
    const componentCustomized = renderer.create(
      <CDataTable
        loading
        fields={fields}
        pagination
        activePage={2}
        itemsPerPage={3}
        items={items}
        sorter
        clickableRows
        columnFilter
        tableFilter
        cleaner
        addTableClasses="table-classes"
        size="sm"
        dark
        striped
        hover
        border
        outlined
        responsive
        footer
        itemsPerPageSelect
        header
        scopedSlots = {{
            'status':
                (item)=>(
                <td className="bg-info">
                    {item.status}
                </td>
                ),
            }}
        />
    );
    let tree = componentCustomized.toJSON();
    expect(tree).toMatchSnapshot()
  })
})

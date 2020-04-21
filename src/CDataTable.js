import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import Slot from './Shared/Slot';
import CSpinner from './CSpinner';
import CPagination from './CPagination';
import style from './CDataTable.module.css';
import {CIcon} from '@coreui/icons-react';

//component - CoreUI / CTable

const CDataTable = props=>{

  const {
    children,
    //custom,
    //
    innerRef,
    overTableSlot,
    columnHeaderSlot,
    sortingIconSlot,
    columnFilterSlot,
    detailsSlot,
    noItemViewSlot,
    captionSlot,
    underTableSlot,
    colNameSlot,
    scopedSlots,
    fields,
    pagination,
    activePage,
    itemsPerPage,
    items,
    sorter,
    clickableRows,
    columnFilter,
    tableFilterValue,
    tableFilter,
    addTableClasses,
    size,
    dark,
    striped,
    fixed,
    hover,
    border,
    outlined,
    responsive,
    footer,
    itemsPerPageSelect,
    loading,
    change,
    onChange,
    customContent,
    sorterValue,
    columnFilterValue
  } = props;

  //Object.assign(style, cssModule)

  const compData = useRef({firstRun:true}).current;

  // vars

  //
  const [perPageItems, setPerPageItems] = useState(itemsPerPage);
  const [sorterState, setSorterState] = useState({
    column: null,
    asc: true
  });
  const [tableFilterState, setTableFilterState] = useState(tableFilterValue);
  const [columnFilterState, setColumnFilterState] = useState({});
  const [page, setPage] = useState(activePage || 1);
  const [passedItems, setPassedItems] = useState(items || []);

  // functions

  const cellClass = (item, colName, index)=>{
    let classes = [];
    if (item._cellClasses && item._cellClasses[colName]) {
      classes.push(item._cellClasses[colName]);
    }
    if (fields && fields[index]._classes) {
      classes.push(fields[index]._classes);
    }
    return classes;
  }
  const pretifyName = (name)=>{
    return name.replace(/[-_.]/g, ' ')
      .replace(/ +/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  const headerClass = (index)=>{
    //const fields = this.fields ???
    return fields && fields[index]._classes ? fields[index]._classes : ''
  }
  const isSortable = (index)=>{
    return sorter && (!fields || fields[index].sorter !== false)
  }
  const headerStyles = (index)=>{
    let style = {}
    if (isSortable(index)) {
      style['cursor']='pointer';
    }
    if (fields && fields[index] && fields[index]._style) {
      let r = fields[index]._style.split(':');
      style[r[0]] = r[1].substr(0, r[1].length-2)
    }
    return style
  }
  const getIconState = (index)=>{
    const direction = sorterState.asc ? 'asc' : 'desc'
    return rawColumnNames[index] === sorterState.column ? direction : 0
  }
  const iconClasses = (index)=>{
    const state = getIconState(index)
    return [
      style['icon-transition position-absolute arrow-position'],
      !state ? style['transparent'] : '',
      state === 'desc' ? style['rotate-icon'] : ''
    ]
  }
  const rowClicked = (item, index)=>{
    onChange && onChange('row-clicked', item, index);
  }
  const changeSort = (column, index)=>{
    if (!isSortable(index)) {
      return
    }
    //if column changed or sort was descending change asc to true
    const state = sorterState
    const columnRepeated = state.column === column
    if (!sorter || !sorter.resetable) {
      state.column = column;
    } else {
      state.column = columnRepeated && state.asc === false ? null : column
    }
    state.asc = !(columnRepeated && state.asc)
    setSorterState({...state});
    //console.log(state, sorterState);
    onChange && onChange('update:sorter-value', sorterState)
  }
  const paginationChange = (e)=>{
    onChange && onChange('pagination-change', Number(e.target.value));
    setPerPageItems(Number(e.target.value))
  }
  const columnFilterEvent = (colName, value, type)=>{
    const isLazy = columnFilter && columnFilter.lazy === true
    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return
    }
    let state = {};
    state[colName] = value;
    setColumnFilterState({...columnFilterState, ...state});
    onChange && onChange('update:column-filter-value', columnFilterState);
  }
  const tableFilterChange = (value, type)=>{
    const isLazy = tableFilter && tableFilter.lazy === true
    if (isLazy && type === 'input' || !isLazy && type === 'change') {
      return
    }
    setTableFilterState(value)
    onChange && onChange('update:table-filter-value', tableFilterState);
  }

  // computed

  let generatedColumnNames = Object.keys(passedItems[0] || {}).filter(el => el.charAt(0) !== '_');
  let rawColumnNames = (()=>{
    if (fields) {
      return fields.map(el => el.key || el)
    }
    return generatedColumnNames
  })();
  let columnFiltered = (()=>{
    let items = passedItems.slice()
    if (columnFilter && columnFilter.external) {
      return items
    }
    Object.entries(columnFilterState).forEach(([key, value]) => {
      const columnFilter = String(value).toLowerCase()
      if (columnFilter && rawColumnNames.includes(key)) {
        items = items.filter(item => {
          return String(item[key]).toLowerCase().includes(columnFilter)
        })
      }
    })
    return items
  })();
  let filterableCols = (()=>{
    return rawColumnNames.filter(name => {
      return generatedColumnNames.includes(name)
    })
  })();
  let tableFiltered = (()=>{
    let items = columnFiltered.slice()
    if (!tableFilterState || (tableFilter && tableFilter.external)) {
      return items
    }
    const filter = tableFilterState.toLowerCase()
    const hasFilter = (item) => String(item).toLowerCase().includes(filter)
    items = items.filter(item => {
      return filterableCols.filter(key => hasFilter(item[key])).length
    })
    return items
  })();
  let sortedItems = (()=>{
    const col = sorterState.column
    if (!col || !rawColumnNames.includes(col) || sorter.external) {
      return tableFiltered
    }
    //if values in column are to be sorted by numeric value they all have to be type number
    const flip = sorterState.asc ? 1 : -1
    return tableFiltered.slice().sort((a,b) => {
      return (a[col] > b[col]) ? 1 * flip : ((b[col] > a[col]) ? -1 * flip : 0)
    })
  })();
  let tableClasses = (()=>{
    return [
      'table',
      addTableClasses,
      {
        [`table-${size}`]: size,
        'table-dark': dark,
        'table-striped': striped,
        'b-table-fixed': fixed,
        'table-hover': hover,
        'table-bordered': border,
        'border': outlined
      }
    ]
  })();
  let columnNames = (()=>{
    if (fields) {
      return fields.map(f => {
        return f.label !== undefined ? f.label : pretifyName(f.key || f)
      })
    }
    return rawColumnNames.map(el => pretifyName(el))
  })();
  let sortingIconStyles = (()=>{
    return {'position-relative pr-4' : sorter }
  })();
  let colspan = (()=>{
    return rawColumnNames.length
  })();
  let totalPages = (()=>{
    return Math.ceil((sortedItems.length) / perPageItems) || 1
  })();
  //
  let computedPage = pagination ? page : activePage;
  let firstItemIndex = (computedPage - 1) * perPageItems || 0;
  let paginatedItems = sortedItems.slice(
      firstItemIndex,
      firstItemIndex + perPageItems
    )
  let currentItems = computedPage ? paginatedItems : sortedItems;

  let tableFilterData;
  if (tableFilter)
  tableFilterData = {
    label: tableFilter.label || 'Filter:',
    placeholder: tableFilter.placeholder || 'type string...'
  }

  // watch

  //itemsPerPage
  useMemo(()=>{
    if (compData.firstRun) return;
    setPerPageItems(itemsPerPage);
  }, [itemsPerPage]);

  //sorterValue
  useMemo(()=>{
    const asc = sorterValue.asc === false ? false : true;
    setSorterState(Object.assign({}, { asc, column: sorterValue.column }));
  }, [sorterValue]);

  //tableFilterValue
  useMemo(()=>{
    if (compData.firstRun) return;
    setTableFilterState(tableFilterValue);
  }, [tableFilterValue]);

  //columnFilterValue
  useMemo(()=>{
    setColumnFilterState(Object.assign({}, columnFilterValue));
  }, [columnFilterValue]);

  //items
  useMemo(()=>{
    compData.oldItems = items;
    if (compData.firstRun) return;
    if (items.length !== compData.oldItems.length ||
      JSON.stringify(items) !== JSON.stringify(compData.oldItems)) {
      setPassedItems(items||[]);
    }
  }, [items]);

  //totalPages
  useMemo(()=>{
    onChange && onChange('pages-change', totalPages);
  }, [totalPages]);

  //get render par
  if (change)
    change();

  // render
  //alert('render');

  //custom
  //if (custom)
  //  return (<CTableCustom {...attributes} custom={customContent}>{children}</CTableCustom>);

  compData.firstRun = false;

  let paginationProps;
  if (typeof pagination === 'object')
    paginationProps = {...pagination}
  else {
    paginationProps = {}
  }

  return (
    <React.Fragment>
    <div ref={innerRef}>
      {
        itemsPerPageSelect || tableFilter ?
        <div className="row my-2 mx-0">
          {
            tableFilter ?
            <div className="col-sm-6 form-inline p-0">
              <label className="mr-2">{tableFilterData.label}</label>
              <input
                className="form-control table-filter"
                type="text"
                placeholder={tableFilterData.placeholder}
                onInput={(e)=>{tableFilterChange(e.target.value, 'input')}}
                onChange={(e)=>{tableFilterChange(e.target.value, 'change')}}
                value={tableFilterState}
              />
            </div>:''
          }
          {
            itemsPerPageSelect ?
            <div
              className={'col-sm-6 p-0' + (!tableFilter ? 'offset-sm-6' : '')}
            >
              <div className="form-inline justify-content-sm-end">
                <label className="mr-2">Items per page:</label>
                <select
                  className="form-control"
                  onChange={paginationChange}
                  value={0}
                >
                  <option value="" disabled hidden>
                    {perPageItems}
                  </option>
                  {[5,10,20,50].map((number, key)=>{
                    return (
                      <option
                        val={number}
                        key={key}
                      >
                        {number}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>:''
          }
        </div>:''
      }
    </div>

    <Slot content={overTableSlot} />

    <div className={`position-relative ${responsive ? 'table-responsive' : '' }`}>
      <table className={classNames(tableClasses)}>
        <thead>
          <tr>
            {
              columnNames.map((name, index)=>{
                return (
                  <th
                    onClick={()=>{changeSort(rawColumnNames[index], index)}}
                    className={classNames([headerClass(index), sortingIconStyles])}
                    style={headerStyles(index)}
                    key={index}
                  >
                    <Slot content={columnHeaderSlot[`${rawColumnNames[index]}`]}>
                      <div className="d-inline">{name}</div>
                    </Slot>
                    {
                      isSortable(index)?
                        <Slot
                          content={sortingIconSlot}
                          state={getIconState(index)}
                          classes={iconClasses(index)}
                        >
                          <CIcon
                            className={classNames(iconClasses(index))}
                            width="18"
                            content="$options.icons.cilArrowTop"
                            name="cil-arrow-top"
                          />
                        </Slot>:''
                    }
                  </th>
                )
              })
            }
          </tr>
          {
            columnFilter ?
              <tr className="table-sm">
                {
                  rawColumnNames.map((colName, index)=>{
                    return (
                      <th className={classNames(headerClass(index))} key={index}>
                        <Slot content={columnFilterSlot[`${rawColumnNames[index]}`]}>
                          {
                            !fields || fields[index].filter !== false ?
                              <input
                                className="w-100 table-filter"
                                onInput={(e)=>{columnFilterEvent(colName, e.target.value, 'input')}}
                                onChange={(e)=>{columnFilterEvent(colName, e.target.value, 'change')}}
                                value={columnFilterState[colName]}
                              />:''
                          }
                        </Slot>
                      </th>
                    )
                  })
                }
              </tr>:''
          }
        </thead>
        <tbody
          style={clickableRows ? {cursor: 'pointer'} : null}
          className="position-relative"
        >
          {currentItems.map((item, itemIndex)=>{
            return (
              <React.Fragment key={itemIndex}>
              <tr
                className={classNames(item._classes)}
                tabIndex={clickableRows ? 0 : null}
                onClick={()=>{rowClicked(item, itemIndex + firstItemIndex)}}
              >
                {
                  rawColumnNames.map((colName, index)=>{
                    if (scopedSlots[colName])
                      return(
                        <Slot
                          content={scopedSlots[colName](item, itemIndex + firstItemIndex)}
                          key={index}
                        />
                      )
                    else
                      return (
                        <td
                          className={classNames(cellClass(item, colName, index))}
                          key={index}
                        >
                          {String(item[colName])}
                        </td>
                      )
                  })
                }
              </tr>
              {
                scopedSlots.details?
                  <tr
                    className="p-0"
                    style={{border: 'none !important'}}
                    key={'details' + itemIndex}
                  >
                    <td
                      colSpan={colspan}
                      className="p-0"
                      style={{border: 'none !important'}}
                    >
                      <Slot
                        content={scopedSlots.details(item, itemIndex + firstItemIndex)}
                      />
                    </td>
                  </tr>:''
              }
              </React.Fragment>
            )
          })}
          {
            !currentItems.length ?
              <tr>
                <td colSpan={colspan}>
                  <Slot content={noItemViewSlot}>
                    <div className="text-center my-5">
                      <h2>
                        {passedItems.length ? 'No filtering results ' : 'No items' }
                        <CIcon
                          width="30"
                          name="cilBan"
                          content="$options.icons.cilBan"
                          className="text-danger mb-2"
                        />
                      </h2>
                    </div>
                  </Slot>
                </td>
              </tr>:null
          }
        </tbody>
        {
          footer && currentItems.length > 0 ?
            <tfoot>
              <tr>
                {
                  columnNames.map((name, index)=>{
                    return(
                      <th
                        onClick={changeSort(rawColumnNames[index], index)}
                        className={classNames([headerClass(index), sortingIconStyles])}
                        style={headerStyles(index)}
                        key={index}
                      >
                        <Slot content={columnHeaderSlot[`${rawColumnNames[index]}`]}>
                          <div className="d-inline">{name}</div>
                        </Slot>
                        {
                          isSortable(index) ?
                            <Slot
                              content={sortingIconSlot}
                              state={getIconState(index)}
                            >
                              <CIcon
                                width="18"
                                name="cil-arrow-top"
                                content="$options.icons.cilArrowTop"
                                className={classNames(iconClasses(index))}
                              />
                            </Slot>:null
                        }
                      </th>
                    )
                  })
                }
              </tr>
            </tfoot> : null
        }
        <Slot content={captionSlot} />
      </table>

      {
        loading ?
          <Slot content={children}>
            <div style={{
              position: 'absolute',
              left:'0',
              top:'0',
              bottom:'0',
              right:'0',
              backgroundColor:'rgb(255,255,255,0.4)'
            }}>
              <div style={{
                position:'absolute',
                bottom:'50%',
                left:'50%',
                transform:'translateX(-50%)'
              }}>
                <CSpinner color="success"/>
              </div>
            </div>
          </Slot>:null
      }

    </div>

    <Slot content={underTableSlot} />

    {
      //:activePage.sync="page"
      //v-bind={typeof pagination === 'object' ? {...pagination} : null}
      pagination ?
        <CPagination
          onClick={(e, type, n)=>{
            //alert(type, n);
            switch (type){
              case 'number':
                setPage(n);
                break;
              case 'next':
                setPage(page+4);
                break;
              case 'previous':
                setPage(page-4);
                break;
              case 'first':
                setPage(1);
                break;
              case 'last':
                setPage(totalPages);
                break;
            }
          }}
          pageMin={1}
          pageMax={totalPages}
          activePage={page}
          style={{display: totalPages > 0 ? 'inline' : 'none'}}
          {...paginationProps}
        />:null
    }

    </React.Fragment>
  )

}

CDataTable.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  overTableSlot: PropTypes.node,
  colNameSlot: PropTypes.node,//?
  columnHeaderSlot: PropTypes.array,
  sortingIconSlot: PropTypes.node,
  columnFilterSlot: PropTypes.node,
  detailsSlot: PropTypes.node,//?
  noItemViewSlot: PropTypes.node,
  captionSlot: PropTypes.node,
  underTableSlot: PropTypes.node,
  scopedSlots: PropTypes.object,
  fields: PropTypes.array,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  activePage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  items: PropTypes.array,
  sorter: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  clickableRows: PropTypes.bool,
  columnFilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  tableFilterValue: PropTypes.string,
  tableFilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  addTableClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  size: PropTypes.string,
  dark: PropTypes.bool,
  striped: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  border: PropTypes.bool,
  outlined: PropTypes.bool,
  responsive: PropTypes.bool,
  footer: PropTypes.bool,
  itemsPerPageSelect: PropTypes.bool,
  loading: PropTypes.bool,
  change: PropTypes.func, //+
  onChange: PropTypes.func,
  sorterValue: PropTypes.object,
  columnFilterValue: PropTypes.object
}

CDataTable.defaultProps = {
  itemsPerPage: 10,
  responsive: true,
  columnHeaderSlot: [],
  columnFilterSlot: [],
  sorterValue: {}
}

CDataTable.Context = React.createContext({});

export default CDataTable;

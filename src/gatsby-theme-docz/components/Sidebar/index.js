/** @jsx jsx */
import { Fragment, forwardRef, useState, useRef, useEffect } from 'react'
import { Global } from '@emotion/react'
import { jsx, Box } from 'theme-ui'
import { useMenus, useCurrentDoc } from 'docz'

import * as styles from './styles'
import { Logo } from '../Logo'
import { NavSearch } from '../NavSearch'
import { NavLink } from '../NavLink'
import { NavGroup } from '../NavGroup'

export const Sidebar = forwardRef(function Sidebar(props, ref) {
  const { show } = props
  const [query, setQuery] = useState('')
  const menus = useMenus({ query })
  const currentDoc = useCurrentDoc()
  const currentDocRef = useRef()
  // const handleChange = ev => {
  //   setQuery(ev.target.value)
  // }
  useEffect(() => {
    if (ref.current && currentDocRef.current) {
      ref.current.scrollTo(0, currentDocRef.current.offsetTop)
    }
  }, [])
  const cssVars = {
    '--cui-sidebar-bg': '#f0f4f7',
    '--cui-sidebar-brand-bg': 'transparent',
    '--cui-sidebar-brand-color': 'rgba(44,56,74,0.87)',
    '--cui-sidebar-nav-link-color': 'rgba(44,56,74,0.87)',
    '--cui-sidebar-nav-link-active-color': '#321fdb',
    '--cui-sidebar-nav-link-hover-color': '#321fdb',
    '--cui-sidebar-nav-group-bg': 'transparent',
    '--cui-sidebar-nav-group-toggle-show-color': '#321fdb',
    '--cui-sidebar-nav-link-color': '#988fed',
  }

  return (
    <div
      className={`sidebar sidebar-lg sidebar-fixed sidebar-self-hiding-md border-end ps-xl-4", ${
        show && 'show'
      }`}
      style={{ ...cssVars }}
    >
      <div className="sidebar-brand justify-content-start ps-3">
        <Logo />
      </div>
      <div className="sidebar-nav">
        {menus &&
          menus.map((menu) => {
            if (!menu.route) return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />
            if (menu.route === currentDoc.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
      </div>
      {/* <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>
      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        <NavSearch
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
        />
        {menus &&
          menus.map(menu => {
            if (!menu.route)
              return <NavGroup key={menu.id} item={menu} sidebarRef={ref} />
            if (menu.route === currentDoc.route) {
              return (
                <NavLink key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            return (
              <NavLink key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
      </Box> */}
    </div>
  )
})

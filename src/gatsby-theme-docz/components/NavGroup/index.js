/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState, useRef } from 'react'
import { useCurrentDoc } from 'docz'

// import * as styles from './styles'
import { NavLink } from '../NavLink'
import { ChevronDown } from '../Icons'

const icons = {
  'Getting started': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" width="64" height="64" viewBox="0 0 64 64">
  <title>energy</title>
  <path d="M40 26v-24h-4.012l-27.941 38h16.953v22h3.975l28.125-36zM15.953 36l20.047-27.264v21.264h12.9l-19.9 25.471v-19.471z"></path>
  </svg>`,
  Layout: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon text-primary">
  <path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z" class="ci-primary"></path>
  </svg>`,
  Components: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" width="64" height="64" viewBox="0 0 64 64">
  <title>energy</title>
  <path d="M40 26v-24h-4.012l-27.941 38h16.953v22h3.975l28.125-36zM15.953 36l20.047-27.264v21.264h12.9l-19.9 25.471v-19.471z"></path>
  </svg>`,
  Forms: `<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" viewBox="0 0 512 512">
  <path fill="var(--ci-primary-color, currentColor)" d="M23.686,456.521a24.841,24.841,0,0,0,6,25.708l.087.087a24.841,24.841,0,0,0,17.612,7.342,25.179,25.179,0,0,0,8.1-1.344h0a646.28,646.28,0,0,0,248.04-154.207L469.981,167.646A88.832,88.832,0,1,0,344.354,42.019l-9.534,9.534L314.029,30.762a50.4,50.4,0,0,0-71.274,0L108.687,164.83l22.626,22.627L265.382,53.389a18.4,18.4,0,0,1,26.019,0L312.193,74.18l-134.3,134.3A646.28,646.28,0,0,0,23.686,456.521Zm343.3-391.875a56.832,56.832,0,1,1,80.373,80.373l-89.493,89.493-80.372-80.373ZM254.862,176.766l80.372,80.372L280.892,311.48A614.383,614.383,0,0,1,58.779,453.221,614.383,614.383,0,0,1,200.52,231.108Z" class="ci-primary"></path>
  </svg>`,
  Migration: `<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" viewBox="0 0 512 512">
  <path fill="var(--ci-primary-color, currentColor)" d="M464,256.25C464,370.8,370.8,464,256.25,464S48.5,370.8,48.5,256.25,141.7,48.5,256.25,48.5a208,208,0,0,1,149.963,64H328.5v32h128V16.5h-32V85.478A239.717,239.717,0,1,0,496,256.25Z" class="ci-primary"></path>
  <polygon fill="var(--ci-primary-color, currentColor)" points="272.5 112.451 240.5 112.549 241.017 282.756 353.301 334.53 366.699 305.47 272.954 262.244 272.5 112.451" class="ci-primary"></polygon>
  </svg>`,
}

export const NavGroup = ({ item, sidebarRef }) => {
  const currentDoc = useCurrentDoc()
  const currentDocRef = useRef()
  const { name, menu } = item
  const [subheadingsVisible, setShowsubheadings] = useState(currentDoc.menu === name)
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible)
  useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop)
    }
  }, [])
  return (
    <div className="nav-item nav-group show" data-testid="nav-group">
      <div
        className="nav-link nav-group-toggle"
        dangerouslySetInnerHTML={{ __html: `${icons[item.name]} ${item.name}` }}
        onClick={toggleSubheadings}
      >
        {/* {dangerouslySetInnerHTML={{ __html: icons[item.name] }}}
        {item.name} */}
        {/* <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} /> */}
      </div>
      <div className="nav-group-items compact" data-testid="nav-group-links">
        {menu &&
          subheadingsVisible &&
          menu.map((menu) => {
            if (currentDoc.route === menu.route) {
              return (
                <NavLink className="nav-link" key={menu.id} item={menu} ref={currentDocRef}>
                  {menu.name}
                </NavLink>
              )
            }
            return (
              <NavLink className="nav-link" key={menu.id} item={menu}>
                {menu.name}
              </NavLink>
            )
          })}
      </div>
    </div>
  )
}

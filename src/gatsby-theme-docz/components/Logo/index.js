/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link, useConfig } from 'docz'
import logo from './coreui-react.svg'

import * as styles from './styles'

export const Logo = () => {
  const config = useConfig()
  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        {/* {config.title} */}
        <img src={logo} alt="That's my logo" height="50" className="d-block mt-4 mb-5"/>
      </Link>
    </Flex>
  )
}

import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Grid, Divider, Search } from 'semantic-ui-react'

import styles from './Sidebar.scss'
const cx = classNames.bind(styles)

const Sidebar = ({ sidebar }) => {
  return (
    <aside className={cx('sidebar', {open: sidebar})}>
      <Grid padded>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Search size='mini' icon='search' placeholder='Search...' />
          </Grid.Column>
        </Grid.Row>

        <Divider className={cx('divider')} />

        <Grid.Row>
          <Grid.Column>
            <Link to="/">Home</Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link to="/test">Test</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </aside>
  )
}

export default Sidebar

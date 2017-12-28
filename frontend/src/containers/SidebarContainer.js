import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Sidebar } from 'components'
import * as uiActions from 'store/reducers/ui'

class SidebarContainer extends Component {
  render() {
    const { sidebar } = this.props
    return (
      <Sidebar sidebar={sidebar} />
    )
  }
}

export default connect(
  (state) => ({
    sidebar: state.ui.getIn(['sidebar', 'visible'])
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch),
  })
)(SidebarContainer)

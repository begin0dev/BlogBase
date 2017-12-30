import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header } from 'components'
import * as uiActions from 'store/reducers/ui'

class HeaderContainer extends Component {
  componentDidMount() {
    const { sidebar } = this.props
    console.log(sidebar)
  }
  sidebarChangeState = () => {
    const { UiActions, sidebar } = this.props
    UiActions.controlSidebar(!sidebar)
  }
  render() {
    const { sidebar } = this.props
    return (
      <Header
        sidebar={sidebar}
        sidebarChangeState={this.sidebarChangeState}
      />
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
)(HeaderContainer)

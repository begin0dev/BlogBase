import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header } from 'components'
import * as uiActions from 'store/reducers/ui'

class HeaderContainer extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.sidebarToggleResizeEvent)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.sidebarToggleResizeEvent)
  }

  sidebarOnToggle = () => {
    const { UiActions, sidebar } = this.props
    UiActions.controlSidebar(!sidebar)
  }
  sidebarToggleResizeEvent = () => {
    const { UiActions, sidebar } = this.props
    if (!sidebar && window.innerWidth >= 768) {
      UiActions.controlSidebar(true)
    }
  }

  render() {
    const { sidebarOnToggle } = this
    const { sidebar } = this.props
    return (
      <Header
        sidebar={sidebar}
        sidebarOnToggle={sidebarOnToggle}
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

import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Header } from 'components'

class HeaderContainer extends Component {
  render() {
    return (
      <Header />
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(HeaderContainer)

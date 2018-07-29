import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Overlay } from 'components';

class OverlayContainer extends Component {
  overlayVisible = () => {
    const { sidebar } = this.props;
    if (window.innerWidth < 768 && sidebar.visible) return true;
    return false;
  }

  render() {
    const { overlayVisible } = this;
    return (
      <Overlay visible={overlayVisible()} />
    );
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);

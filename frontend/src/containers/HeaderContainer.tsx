import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IBaseState } from 'store/modules/base';
import { Header } from 'components';

interface IProps {
  baseState: IBaseState;
}

class HeaderContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Header />
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);

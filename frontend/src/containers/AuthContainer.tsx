import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IAuthState, Actions as authActions } from 'store/modules/auth';
import { Auth, Modal } from 'components';

interface IProps {
  authState: IAuthState;
  dispatchSetAuthFormValue(name: string, value: string): void;
}

class AuthContainer extends React.Component<IProps> {
  setAuthFormValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { dispatchSetAuthFormValue } = this.props;
    const { name, value } = e.target;
    dispatchSetAuthFormValue(name, value);
  };

  render() {
    const { authState } = this.props;
    const { setAuthFormValue } = this;
    return (
      <Modal
        active={authState.state.active}
        fullScreen={window.innerWidth < 450}
        size={{ width: '800px' }}
      >
        <Auth authState={authState} setAuthFormValue={setAuthFormValue} />
      </Modal>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchSetAuthFormValue(name: string, value: string) {
    return dispatch(authActions.setAuthFormValue({ name, value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);

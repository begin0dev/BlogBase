import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/reducers';
import { IAuthState, AuthActions } from 'store/reducers/auth';
import { Auth, Modal } from 'components';

interface IProps {
  authState: IAuthState;
  dispatchChangeAuthFormValue(name: string, value: string): void;
}

class AuthContainer extends React.Component<IProps> {
  changeAuthFormValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { dispatchChangeAuthFormValue } = this.props;
    const { name, value } = e.target;
    dispatchChangeAuthFormValue(name, value);
  };

  render() {
    const { authState } = this.props;
    const { changeAuthFormValue } = this;
    return (
      <Modal
        active={authState.state.active}
        fullScreen={window.innerWidth < 450}
        size={{ width: '700px' }}
      >
        <Auth authState={authState} changeAuthFormValue={changeAuthFormValue} />
      </Modal>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
});
const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
  dispatchChangeAuthFormValue(name: string, value: string) {
    return dispatch({ type: 'CHANGE_AUTH_FORM_VALUE', name, value });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);

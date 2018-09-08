import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import onClickOutside, {
  HandleClickOutside,
  InjectedOnClickOutProps
} from "react-onclickoutside";

import { IStoreState } from "store/modules";
import { ISidebarState } from "store/modules/sidebar";
import { Hamburger, Overlay, Sidebar } from "components";

interface IProps {
  sidebarState: ISidebarState;
  dispatchToggleSidebar(visible: boolean): void;
  dispatchExpandedNavi(expand: boolean): void;
}

export type Props = IProps &
  InjectedOnClickOutProps &
  HandleClickOutside<any> &
  RouteComponentProps<any>;

class SidebarContainer extends React.Component<Props> {
  hamburgerRef: any;

  constructor(props: Props) {
    super(props);
    this.hamburgerRef = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("resize", this.sidebarResizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.sidebarResizeEvent);
  }

  handleClickOutside = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { toggleSidebar, hamburgerRef } = this;
    const { sidebarState } = this.props;
    if (hamburgerRef.contains(e.target)) return;
    if (!sidebarState.visible || window.innerWidth >= 768) return;
    toggleSidebar();
  };
  setSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target);
  };
  toggleSidebar = (): void => {
    const { sidebarState, dispatchToggleSidebar } = this.props;
    if (window.innerWidth < 768) dispatchToggleSidebar(!sidebarState.visible);
  };
  sidebarResizeEvent = (): void => {
    const { sidebarState, dispatchToggleSidebar } = this.props;
    const { visible } = sidebarState;
    if (!visible && window.innerWidth >= 768) dispatchToggleSidebar(true);
    if (visible && window.innerWidth < 768) dispatchToggleSidebar(false);
  };
  expandedNavi = (expand: boolean) => (): void => {
    const { dispatchExpandedNavi } = this.props;
    console.log(expand);
    dispatchExpandedNavi(expand);
  };

  render() {
    const { toggleSidebar, expandedNavi, setSearchValue } = this;
    const { sidebarState } = this.props;
    return (
      <React.Fragment>
        <Sidebar
          sidebarState={sidebarState}
          expandedNavi={expandedNavi}
          setSearchValue={setSearchValue}
          key="sidebar"
        />
        <Hamburger
          visible={sidebarState.visible}
          toggleSidebar={toggleSidebar}
          hamburgerRef={(hamburger: any) => (this.hamburgerRef = hamburger)}
          key="hamburger"
        />
        {window.innerWidth < 768 && (
          <Overlay visible={sidebarState.visible} key="sidebar-overlay" />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  sidebarState: state.sidebar
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatchToggleSidebar(visible: boolean): void {
    dispatch({ type: "TOGGLE_SIDEBAR", visible });
  },
  dispatchExpandedNavi(expand: boolean): void {
    dispatch({ type: "EXPANDED_NAVI", expand });
  }
});

const outsideWrap = onClickOutside(SidebarContainer);
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(outsideWrap)
);

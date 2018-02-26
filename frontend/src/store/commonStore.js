import { observable, action } from 'mobx';

class CommonStore {
  @observable sidebar = {
    visible: true,
    searchValue: '',
    searchLoading: false,
  }
  @observable menu = {
    expand: false,
  }

  @action toggleExpand(expand) {
    this.menu = expand;
  }
  @action toggleSidebar(visible) {
    this.sidebar.visible = visible;
  }
  @action setSearchValue(value) {
    this.sidebar.searchValue = value;
  }
  @action setSearchLoading() {
    this.sidebar.searchLoading = !this.sidebar.searchLoading;
  }
}

export default new CommonStore();

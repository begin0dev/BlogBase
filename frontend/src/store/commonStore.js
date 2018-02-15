import { observable, action } from 'mobx';

class CommonStore {
  @observable sidebar = true;

  @action toggleSidebar(visible) {
    this.sidebar = visible;
  }
}

export default new CommonStore();

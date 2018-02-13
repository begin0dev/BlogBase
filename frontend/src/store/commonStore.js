import { observable, action } from 'mobx';

class CommonStore {
  @observable sidebar ={
    visible: true,
    active: 1,
  }

  @action toggleSidebar(visible) {
    this.sidebar.visible = visible;
  }
}

export default new CommonStore();

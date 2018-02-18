import { observable, action } from 'mobx';

class CommonStore {
  @observable sidebar = true;
  @observable active = 0;
  @observable menu = [
    { name: 'HOME', path: '/', child: null },
    { name: '프로필', path: '/profile', child: null },
    {
      name: '전체글',
      path: '/category/all',
      child: [
        { name: 'javascript', path: '/category/javascript' },
        { name: 'javascript', path: '/category/javascript' },
      ],
    },
  ];

  @action toggleSidebar(visible) {
    this.sidebar = visible;
  }
}

export default new CommonStore();

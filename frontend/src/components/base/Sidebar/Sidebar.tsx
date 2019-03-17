import * as React from 'react';
import * as classNames from 'classnames/bind';

import { SearchInput } from 'components';
import Navi from './Navi/Navi';
import styles from './Sidebar.module.scss';

import { ISidebarState } from 'store/modules/sidebar';

const cx = classNames.bind(styles);

interface IProps {
  sidebarState: ISidebarState;
  expandedNavi(expand: boolean): () => void;
  setSearchValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Sidebar: React.FunctionComponent<IProps> = ({ sidebarState, setSearchValue, expandedNavi }) => {
  const { keyword, loading } = sidebarState.search;
  return (
    <aside className={cx('sidebar', { open: sidebarState.visible })}>
      <div className={cx('search')}>
        <SearchInput value={keyword} loading={loading} setValue={setSearchValue} placeholder="Search..." />
      </div>
      <Navi expanded={sidebarState.expanded} expandedNavi={expandedNavi} />
    </aside>
  );
};

export default Sidebar;

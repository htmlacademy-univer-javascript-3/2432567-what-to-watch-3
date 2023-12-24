import { TabLinkProps } from './tab-link.props';
import cn from 'classnames';

function TabLink({ tab, activeTab, onClick }: TabLinkProps): JSX.Element {
  return (
    <li
      className={cn('film-nav__item', tab === activeTab && 'film-nav__item--active')}
      onClick={onClick}
      id={tab}
      data-testid={tab}
    >
      <a className="film-nav__link"> {tab} </a>
    </li>
  );
}

export default TabLink;

import { TabLinkProps } from './tab-link.props';

function TabLink({ tab, activeTab, onClick }: TabLinkProps): JSX.Element {
  return (
    <li
      className={
        `film-nav__item"
        ${tab === activeTab ? 'film-nav__item--active' : ''}`
      }
      onClick={onClick}
      id={tab}
    >
      <a className="film-nav__link"> {tab} </a>
    </li>
  );
}

export default TabLink;

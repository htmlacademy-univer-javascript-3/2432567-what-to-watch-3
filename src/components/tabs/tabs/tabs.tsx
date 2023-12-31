import TabLink from '../tab-link/tab-link';
import { TabsType } from '../../../const';
import { SyntheticEvent, useState } from 'react';
import TabOverview from '../tab-overview/tab-overview';
import TabDetails from '../tab-details/tab-details';
import TabReviews from '../tab-reviews/tab-reviews';
import { FilmType } from '../../../schemas/films';

function Tabs({ film }: { film: FilmType }): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabsType>(TabsType.Overview);
  const handleTabClick = (evt: SyntheticEvent) => {
    const newTab = evt.currentTarget.id as TabsType;
    if (newTab) {
      setActiveTab(newTab);
    }
  };

  const tabs = {
    [TabsType.Overview]: <TabOverview film={film} />,
    [TabsType.Details]: <TabDetails film={film} />,
    [TabsType.Reviews]: <TabReviews film={film} />,
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <TabLink tab={TabsType.Overview} onClick={handleTabClick} activeTab={activeTab} />
          <TabLink tab={TabsType.Details} onClick={handleTabClick} activeTab={activeTab} />
          <TabLink tab={TabsType.Reviews} onClick={handleTabClick} activeTab={activeTab} />
        </ul>
      </nav>
      {tabs[activeTab]}
    </div>
  );
}

export default Tabs;

import { SyntheticEvent } from 'react';
import { TabsType } from '../../../const';

type TabLinkProps = {
  tab: TabsType;
  onClick: (evt: SyntheticEvent) => void;
  activeTab: TabsType;
}

export type { TabLinkProps };

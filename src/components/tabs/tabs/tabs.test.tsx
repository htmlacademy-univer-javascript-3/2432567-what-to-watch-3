import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Tabs from './tabs.tsx';
import { makeFakeFilm } from '../../../mocks/mock.ts';
import { TabsType } from '../../../const.ts';

describe('Component: Tabs', () => {
  it('should render correct', () => {
    const { film } = makeFakeFilm();

    render(<Tabs film={film} />);

    expect(screen.getByText(TabsType.Overview)).toBeInTheDocument();
    expect(screen.getByText(TabsType.Details)).toBeInTheDocument();
    expect(screen.getByText(TabsType.Reviews)).toBeInTheDocument();
  });
});

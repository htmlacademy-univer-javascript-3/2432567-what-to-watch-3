import { describe } from 'vitest';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../const.ts';
import { makeFakeFilm, makeFakeStore } from '../../mocks/mock.ts';
import MyListButton from './my-list-btn.tsx';
import { initialStateProps } from '../../store/films/films.props.ts';
import { MemoryHistory, createMemoryHistory } from 'history';

describe('Component: MyListButton', () => {
  let mockHistory: MemoryHistory;
  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correct', () => {
    const store = makeFakeStore();
    const { film } = makeFakeFilm();

    const withHistoryComponent = withHistory(<MyListButton film={film} />, mockHistory);
    const { withStoreComponent, mockStore } = withStore(withHistoryComponent, store);

    render(withStoreComponent);

    const filmsSlice = mockStore.getState()[NameSpace.Film] as initialStateProps;
    expect(screen.getByText(String(filmsSlice.films.length))).toBeInTheDocument();
  });
});

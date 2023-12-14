import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { makeFakePromoFilm, makeFakeStore } from '../../mocks/mock.ts';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import FilmPromo from './film-promo.tsx';

describe('Component: PromoFilm', () => {
  it('should render correct', () => {
    const film = makeFakePromoFilm();
    const store = makeFakeStore();

    const withHistoryComponent = withHistory(<FilmPromo film={film} />);
    const { withStoreComponent } = withStore(withHistoryComponent, store);

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
  });
});

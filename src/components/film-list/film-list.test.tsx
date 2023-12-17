import { render, screen } from '@testing-library/react';
import { withHistory } from '../../mocks/mock-components.tsx';
import { makeFakeFilmInList } from '../../mocks/mock.ts';
import FilmCard from '../film-card/film-card.tsx';

describe('Component: MovieCard', () => {
  it('should render correct', () => {
    const film = makeFakeFilmInList();
    const onMouseOver = vi.fn();
    const onMouseOut = vi.fn();
    const componentWithHistory = withHistory(
      <FilmCard
        film={film}
        isPlaying
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    );

    render(componentWithHistory);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByTestId('film')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { makeFakeFilmInList } from '../../mocks/mock';
import FilmCard from './film-card';
import { withHistory } from '../../mocks/mock-components';

describe('Component: FilmCard', () => {
  it('render correctly', () => {
    const film = makeFakeFilmInList();
    const fn = vi.fn;

    const dataTestIdForFilmCard = 'small-film-card-image';

    const preparedComponent = withHistory(
      <FilmCard film={film} isPlaying={false} onMouseOver={fn} onMouseOut={fn} />
    );

    render(preparedComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByTestId(dataTestIdForFilmCard)).toBeInTheDocument();
  });
});

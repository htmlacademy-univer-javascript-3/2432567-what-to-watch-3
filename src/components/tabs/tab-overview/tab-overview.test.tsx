import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../../mocks/mock';
import { withHistory } from '../../../mocks/mock-components';
import TabOverview from './tab-overview';
import { getRating } from '../../../utils/utils';

describe('Component: TabOverview', () => {
  it('render correctly', () => {
    const { film } = makeFakeFilm();

    const preparedComponent = withHistory(<TabOverview film={film} />);

    render(preparedComponent);

    expect(screen.getByText(`Director: ${film.director}`)).toBeInTheDocument();

    expect(screen.getByText(`Starring: ${film.starring?.slice(0, 4).join(', ')}`)).toBeInTheDocument();

    expect(screen.getByText(`${film.scoresCount} rating`)).toBeInTheDocument();

    expect(screen.getByText(film.description)).toBeInTheDocument();

    expect(screen.getByText(getRating(film.rating))).toBeInTheDocument();
  });
});

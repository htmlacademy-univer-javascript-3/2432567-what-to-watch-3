import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../../mocks/mock';
import { withHistory } from '../../../mocks/mock-components';
import TabDetails from './tab-details';
import { durationFormate } from '../../../utils/utils';

describe('Component: TabDetails', () => {
  it('render correctly', () => {
    const { film } = makeFakeFilm();

    const expectedTextDirector = /Director/i;
    const expectedTextStarring = /Starring/i;
    const expectedTextRunTime = /Run Time/i;
    const expectedTextReleased = /Released/i;
    const expectedTextGenre = /Genre/i;

    const preparedComponent = withHistory(
      <TabDetails film={film} />
    );

    render(preparedComponent);

    expect(screen.getByText(expectedTextDirector)).toBeInTheDocument();
    expect(screen.getByText(film.director)).toBeInTheDocument();

    expect(screen.getByText(expectedTextStarring)).toBeInTheDocument();

    expect(screen.getByText(expectedTextRunTime)).toBeInTheDocument();
    expect(screen.getByText(durationFormate(film.runTime))).toBeInTheDocument();

    expect(screen.getByText(expectedTextReleased)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();

    expect(screen.getByText(expectedTextGenre)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
  });
});

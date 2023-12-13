import { render, screen } from '@testing-library/react';
import ExitBtn from './exit-btn';
import { makeFakeFilm } from '../../mocks/mock';
import { withHistory } from '../../mocks/mock-components';

describe('Component: ExitBtn', () => {
  it('render correctly', () => {
    const { film } = makeFakeFilm();
    const dataTestIdForExitButton = 'player__exit';

    const preparedComponent = withHistory(<ExitBtn film={film} />);

    render(preparedComponent);

    expect(screen.getByTestId(dataTestIdForExitButton)).toBeInTheDocument();
  });
});

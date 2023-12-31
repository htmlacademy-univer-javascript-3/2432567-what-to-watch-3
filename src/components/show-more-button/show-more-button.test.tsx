import { render, screen } from '@testing-library/react';
import ShowMoreButton from './show-more-button';
import { withHistory } from '../../mocks/mock-components';

describe('Component: ShowMoreFilmButton', () => {
  it('render correctly', () => {
    const onShowMoreFilmButtonClick = () => '';
    const textButton = /Show more/i;

    const preparedComponent = withHistory(
      <ShowMoreButton onClick={onShowMoreFilmButtonClick} />
    );

    render(preparedComponent);

    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

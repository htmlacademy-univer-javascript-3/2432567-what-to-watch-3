import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import FormReview from './form-review.tsx';
import { makeFakeFilm } from '../../mocks/mock.ts';

describe('Component: FormReview', () => {
  it('should render correctly', () => {
    const { film } = makeFakeFilm();

    const { withStoreComponent } = withStore(<FormReview film={film} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getAllByTestId('star')).toHaveLength(10);
    expect(screen.getByText('Post')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const { film } = makeFakeFilm();

    const expectedReviewValue = 'review';
    const { withStoreComponent } = withStore(<FormReview film={film} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(screen.getByRole('textbox'), expectedReviewValue);
    await userEvent.click(screen.getAllByTestId('star')[3]);

    expect(screen.getByDisplayValue(expectedReviewValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(4)).toBeInTheDocument();
  });
});

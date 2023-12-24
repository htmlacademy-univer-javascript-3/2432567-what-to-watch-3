import { makeFakeReview } from '../../mocks/mock';
import { withHistory } from '../../mocks/mock-components';
import { getRating } from '../../utils/utils';
import ReviewBlock from './review';
import { render, screen } from '@testing-library/react';

describe('Component: ReviewCard', () => {
  it('render correctly', () => {
    const review = makeFakeReview();

    const preparedComponent = withHistory(
      <ReviewBlock review={review} />
    );

    render(preparedComponent);

    expect(screen.getByText(review.date)).toBeInTheDocument();
    expect(screen.getByText(review.user)).toBeInTheDocument();
    expect(screen.getByText(getRating(review.rating))).toBeInTheDocument();
    expect(screen.getByText(review.comment)).toBeInTheDocument();
  });
});

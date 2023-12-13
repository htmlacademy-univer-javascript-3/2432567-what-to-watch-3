import { NameSpace } from '../../const';
import { makeFakeReview } from '../../mocks/mock';
import {
  getReviews,
  getStatusLoadingReviews,
  getErrorReviews
} from './selectors';

describe('review selectors', () => {
  const state = {
    [NameSpace.Review]: {
      reviews: [makeFakeReview()],
      statusLoading: false,
      hasError: false,
    }
  };

  it('getReviews', () => {
    const { reviews } = state[NameSpace.Review];

    const result = getReviews(state);

    expect(result).toBe(reviews);
  });

  it('getStatusLoadingReviews', () => {
    const { statusLoading } = state[NameSpace.Review];

    const result = getStatusLoadingReviews(state);

    expect(result).toBe(statusLoading);
  });

  it('getErrorReviews', () => {
    const { hasError } = state[NameSpace.Review];

    const result = getErrorReviews(state);

    expect(result).toBe(hasError);
  });
});

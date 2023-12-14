import { makeFakeReview, makeFakeReview as makeFakeReviews } from '../../mocks/mock';
import { fetchReviews, sendReview } from '../api-action/api-action';
import { reviewsReducer } from './review';
import { initialStateProps } from './reviews.props';

describe('review slice', () => {
  const initialState: initialStateProps = {
    reviews: [],
    statusLoading: false,
    hasError: false
  };

  describe('initial state', () => {
    it('empty action', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = reviewsReducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('empty action and undefined state', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = reviewsReducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchReviews', () => {
    it('fetchReviews.pending', () => {
      const expectedState = {
        ...initialState,
        statusLoading: true,
        hasError: false
      };

      const result = reviewsReducer(initialState, fetchReviews.pending);

      expect(result).toEqual(expectedState);
    });

    it('fetchReviews.reject', () => {
      const expectedState = {
        ...initialState,
        statusLoading: false,
        hasError: true
      };
      const result = reviewsReducer(initialState, fetchReviews.rejected);

      expect(result).toEqual(expectedState);
    });

    it('fetchReviews.fulfilled', () => {
      const reviews = [makeFakeReviews()];
      const expectedState = {
        ...initialState,
        reviews
      };

      const result = reviewsReducer(initialState, fetchReviews.fulfilled(reviews, '', ''));

      expect(result).toEqual(expectedState);
    });
  });

  describe('sendReview', () => {
    it('sendReview.pending', () => {
      const expectedState = {
        ...initialState,
        statusLoading: true,
        hasError: false
      };

      const result = reviewsReducer(initialState, sendReview.pending);

      expect(result).toEqual(expectedState);
    });

    it('sendReview.rejected', () => {
      const expectedState = {
        ...initialState,
        statusLoading: false,
        hasError: true
      };
      const result = reviewsReducer(initialState, sendReview.rejected);

      expect(result).toEqual(expectedState);
    });

    it('sendReview.pending', () => {
      const review = makeFakeReview();
      const expectedState = {
        ...initialState,
        statusLoading: false,
        reviews: [review]
      };

      const result = reviewsReducer(initialState, sendReview.fulfilled(review, '', { rating: 0, reviewText: '', id: '' }));

      expect(result).toEqual(expectedState);
    });
  });
});

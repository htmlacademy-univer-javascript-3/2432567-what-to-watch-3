import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { fetchReviews, sendReview } from '../api-action/api-action.ts';
import { initialStateProps } from './reviews.props.ts';

const initialState: initialStateProps = {
  reviews: [],
  statusLoading: false,
  hasError: false,
};

const pending = (state: initialStateProps) => {
  state.statusLoading = true;
  state.hasError = false;
};

const rejected = (state: initialStateProps) => {
  state.statusLoading = false;
  state.hasError = true;
};

const { reducer: reviewsReducer, actions: reviewActions } = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, pending)
      .addCase(fetchReviews.rejected, rejected)
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;

        state.statusLoading = false;
      })
      .addCase(sendReview.pending, pending)
      .addCase(sendReview.rejected, rejected)
      .addCase(sendReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);

        state.statusLoading = false;
      });
  },
});

export { reviewsReducer, reviewActions };

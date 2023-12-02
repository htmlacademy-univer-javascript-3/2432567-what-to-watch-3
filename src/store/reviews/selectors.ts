import { NameSpace } from '../../const.ts';
import { Review } from '../../schemas/review.ts';
import { State } from '../../types.ts';

const getReviews = (state: Pick<State, NameSpace.Review>): Review[] => state[NameSpace.Review].reviews;
const getStatusLoadingReviews = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].statusLoading;
const getErrorReviews = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].hasError;

export { getReviews, getStatusLoadingReviews, getErrorReviews };

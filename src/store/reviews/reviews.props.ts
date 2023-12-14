import { Review } from '../../schemas/review';

type initialStateProps = {
  reviews: Review[];
  statusLoading: boolean;
  hasError: boolean;
}

export type { initialStateProps };

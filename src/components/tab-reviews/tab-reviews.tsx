import { Review } from '../../types';
import ReviewBlock from '../review/review';

function TabReviews({ reviews }: { reviews: Review[] }): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) => <ReviewBlock review={review} key={review.id} />)
        }
      </div>
    </div>
  );
}

export default TabReviews;

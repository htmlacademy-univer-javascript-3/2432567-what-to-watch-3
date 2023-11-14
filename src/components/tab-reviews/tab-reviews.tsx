import { Review } from '../../types';
import ReviewBlock from '../review/review';

function TabReviews({ reviews }: { reviews: Review[] }): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          // eslint-disable-next-line react/no-array-index-key
          reviews.map((review, idx) => <ReviewBlock review={review} key={idx} />)
        }
      </div>
    </div>
  );
}

export default TabReviews;

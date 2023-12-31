import { Review } from '../../schemas/review';
import { getRating, humanizeFormate } from '../../utils/utils';

function ReviewBlock({ review }: { review: Review }): JSX.Element {
  return (
    <div className="review" data-testid="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date">{humanizeFormate(review.date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{getRating(review.rating)}</div>
    </div>
  );
}

export default ReviewBlock;

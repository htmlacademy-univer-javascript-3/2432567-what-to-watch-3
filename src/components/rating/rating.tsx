import { RatingProps } from './rating.props';

function Rating({ setRating }: RatingProps) {
  return (
    <div className="rating">
      <div className="rating__stars">
        {Array.from({ length: 10 }, (_, i) => i + 1)
          .reverse()
          .map((number) => (
            <span key={number}>
              <input
                className="rating__input"
                id={`star-${number}`}
                type="radio"
                name="rating"
                value={number}
                onChange={setRating}
                data-testid='star'
                // checked={number <= rating} unfinished
              />
              <label
                className="rating__label"
                htmlFor={`star-${number}`}
              >
                Rating {number}
              </label>
            </span>
          ))}
      </div>
    </div>

  );
}

export default Rating;

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ReviewBlock from '../review/review';
import { fetchReviews } from '../../store/api-action';
import { FilmType } from '../../schemas/films';
import { Review } from '../../schemas/review';
import { getReviews } from '../../store/reviews/selectors';
import { getFilm } from '../../store/films/selectors';

function TabReviews(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm) as FilmType;
  const reviews = useAppSelector(getReviews) as Review[];

  useEffect(() => {
    dispatch(fetchReviews(film.id));
  }, [dispatch, film]);

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

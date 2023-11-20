import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FilmType, Review } from '../../types';
import ReviewBlock from '../review/review';
import { fetchReviews } from '../../store/api-action';

function TabReviews(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.film) as FilmType;
  const reviews = useAppSelector((state) => state.reviews) as Review[];

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

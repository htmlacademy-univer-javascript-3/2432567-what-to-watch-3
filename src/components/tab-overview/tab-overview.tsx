import { useAppSelector } from '../../store/hooks';
import { FilmType } from '../../types';

function TabOverview(): JSX.Element {
  const film = useAppSelector((state) => state.film) as FilmType;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.scoresCount}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.rating}</span>
          <span className="film-rating__count">{film.rating} rating</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {film.starring?.slice(0, 4).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default TabOverview;

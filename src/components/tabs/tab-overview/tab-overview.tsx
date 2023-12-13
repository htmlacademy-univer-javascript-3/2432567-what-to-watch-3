import { FilmType } from '../../../schemas/films';
import getLevel from '../../../utils/level-film';

function TabOverview({ film }: { film: FilmType }): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getLevel(Number(film.rating))}</span>
          <span className="film-rating__count">{film.scoresCount} rating</span>
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

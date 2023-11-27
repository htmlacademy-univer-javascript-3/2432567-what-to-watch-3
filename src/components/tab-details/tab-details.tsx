import { FilmType } from '../../schemas/films';
import { getFilm } from '../../store/films/selectors';
import { useAppSelector } from '../../store/hooks';
import getRuntime from '../../utils/duration';

function TabDetails(): JSX.Element {
  const film = useAppSelector(getFilm) as FilmType;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              film.starring
                .slice(0, film.starring.length - 1)
                .map((star) => <span key={star}>{star}, <br /></span>)
            }
            <span>{film.starring.slice(film.starring.length - 1)} </span>
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRuntime(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div >
  );
}

export default TabDetails;

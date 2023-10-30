import { Film } from '../../types';

function TabOverview({ film }: { film: Film}): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.ratingScore}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{film.ratingLevel}</span>
          <span className="film-rating__count">{film.ratingCount} rating</span>
        </p>
      </div>
      <div className="film-card__text">
        {
          // eslint-disable-next-line react/no-array-index-key
          film.description?.map((descr, idx) => <p key={idx}>{descr}</p>)
        }
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

import DataFilm from '../../types/data-film/data-film';

function FilmCard({ film }: {
  film: DataFilm;
}): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={film.pathImg}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;

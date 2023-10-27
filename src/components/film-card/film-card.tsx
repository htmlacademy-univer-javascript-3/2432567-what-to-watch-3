import { Link } from 'react-router-dom';
import PreviewVideo from '../preview-video/preview-video';
import { FilmCardProps } from './film.props';

function FilmCard({ film, isPlaying, onMouseOver, onMouseOut }: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film)}
      onMouseOut={() => onMouseOut()}
    >
      <div className="small-film-card__image">
        <PreviewVideo
          linkVideo={film.linkVideo}
          linkPoster={film.poster}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;

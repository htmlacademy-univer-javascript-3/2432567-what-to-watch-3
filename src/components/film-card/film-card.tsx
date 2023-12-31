import { Link } from 'react-router-dom';
import PreviewVideo from '../preview-video/preview-video';
import { FilmCardProps } from './film.props';
import { AppRoute } from '../../const';

function FilmCard({ film, isPlaying, onMouseOver, onMouseOut }: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film)}
      onMouseOut={() => onMouseOut()}
      data-testid='film'
    >
      <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>
        <div className="small-film-card__image" data-testid="small-film-card-image">
          <PreviewVideo film={film} isPlaying={isPlaying} />
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}

export default FilmCard;

import { Link } from 'react-router-dom';
import PreviewVideo from '../preview-video/preview-video';
import { FilmCardProps } from './film.props';
import { AppRoute } from '../../const';

function FilmCard({ film, isPlaying = false, onMouseOver = () => null, onMouseOut = () => null }: FilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film)}
      onMouseOut={() => onMouseOut()}
      data-testid='movie'
    >
      <div className="small-film-card__image" data-testid="small-film-card-image">
        <PreviewVideo
          linkVideo={film.previewVideoLink}
          linkPoster={film.previewImage}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;

import { GenreLinkProps } from './genre-link.props';
import cn from 'classnames';


function GenreLink({ genre, activeGenre, onClick }: GenreLinkProps): JSX.Element {
  return (
    <li
      className={cn('catalog-genres__item', genre === activeGenre && 'catalog__genres-item--active')}
      onClick={() => {
        onClick(genre);
      }}
    >
      <a className="catalog__genres-link"> {genre} </a>
    </li>
  );
}

export default GenreLink;

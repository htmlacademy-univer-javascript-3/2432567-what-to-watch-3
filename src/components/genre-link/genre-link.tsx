import { GenreLinkProps } from './genre-link.props';
import cn from 'classnames';


function GenreLink({ genre, isActiveGenre, onClick }: GenreLinkProps): JSX.Element {
  return (
    <li
      className={cn('catalog__genres-item', isActiveGenre && 'catalog__genres-item--active')}
      onClick={() => {
        onClick(genre);
      }}
    >
      <a className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreLink;

import { GenreLinkProps } from './genre-link.props';


function GenreLink({ genre, activeGenre, onClick }: GenreLinkProps): JSX.Element {
  return (
    <li
      className={
        `catalog-genres__item"
        ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`
      }
      onClick={() => {
        onClick(genre);
      }}
    >
      <a className="catalog__genres-link"> {genre} </a>
    </li>
  );
}

export default GenreLink;

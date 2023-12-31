import GenreLink from '../genre-link/genre-link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Genre } from '../../types';
import { getActiveGenre, getGenres } from '../../store/films/selectors';
import { filmsActions } from '../../store/films/films';

function GenresList(): JSX.Element {
  const genres = useAppSelector(getGenres) as Genre[];
  const activeGenre = useAppSelector(getActiveGenre) as Genre;
  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: Genre) => {
    dispatch(filmsActions.setActiveGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenreLink key={genre} genre={genre} isActiveGenre={genre === activeGenre} onClick={handleGenreClick} />
      )}
    </ul>
  );
}

export default GenresList;

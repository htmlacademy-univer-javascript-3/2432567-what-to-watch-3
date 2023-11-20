import GenreLink from '../genre-link/genre-link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Genre } from '../../types';
import { defaultShownFilmsAction, setActiveGenreAction } from '../../store/action';

function GenreList(): JSX.Element {
  const genres = useAppSelector((state) => state.genres) as Genre[];
  const activeGenre = useAppSelector((state) => state.activeGenre) as Genre;
  const dispatch = useAppDispatch();

  const handlerOnClick = (genre: Genre) => {
    dispatch(setActiveGenreAction(genre));
    dispatch(defaultShownFilmsAction());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenreLink key={genre} genre={genre} activeGenre={activeGenre} onClick={handlerOnClick} />
      )}
    </ul>
  );
}

export default GenreList;

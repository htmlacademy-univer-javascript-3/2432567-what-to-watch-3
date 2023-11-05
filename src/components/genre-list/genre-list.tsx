import { Genre, Genres } from '../../mocks/genres';
import { setGenreAction } from '../../store/action';
import GenreLink from '../genre-link/genre-link';
import { useAppDispatch, useAppSelector } from '../../hooks/genres';

type GenreListProps = {
  genres: Genres;
}

function GenreList({ genres }: GenreListProps) {
  const activeGenre = useAppSelector((state) => state.genre) as Genre;
  const dispatch = useAppDispatch();

  const handlerOnClick = (genre: string) => {
    dispatch(setGenreAction({ genre }));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <GenreLink key={ genre } genre={genre} activeGenre={activeGenre} onClick={handlerOnClick} />
      )}
    </ul>
  );
}

export default GenreList;

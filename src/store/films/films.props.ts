import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films';
import { Genre } from '../../types';

type NewType = FilmInListType;

type initialStateProps = {
  genres: string[];
  activeGenre: Genre;
  film: FilmType | null | undefined;
  films: NewType[];
  filmPromo: FilmPromoType | null;
  similarFilms: FilmInListType[];
  favoriteFilms: FilmInListType[];
  hasError: boolean;
}

export type { initialStateProps };

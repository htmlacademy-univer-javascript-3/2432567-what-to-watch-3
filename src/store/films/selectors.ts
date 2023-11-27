import { NameSpace } from '../../const.ts';
import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films.ts';
import { Genre, State } from '../../types.ts';

const getFilms = (state: Pick<State, NameSpace.Film>): FilmInListType[] => state[NameSpace.Film].shownFilms;
const getFilmPromo = (state: Pick<State, NameSpace.Film>): FilmPromoType | null => state[NameSpace.Film].filmPromo;
const getFilm = (state: Pick<State, NameSpace.Film>): FilmType | null | undefined => state[NameSpace.Film].film;
const getSimilarFilms = (state: Pick<State, NameSpace.Film>): FilmInListType[] => state[NameSpace.Film].similarFilms;
const getCountShownFilms = (state: Pick<State, NameSpace.Film>): number => state[NameSpace.Film].countShownFilms;
const getGenres = (state: Pick<State, NameSpace.Film>): Genre[] => state[NameSpace.Film].genres;
const getActiveGenre = (state: Pick<State, NameSpace.Film>): Genre => state[NameSpace.Film].activeGenre;
const getStatusLoadingFilms = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].statusLoading;
const getErrorFilm = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].hasError;

export { getFilm, getFilms, getFilmPromo, getSimilarFilms, getStatusLoadingFilms, getCountShownFilms, getGenres, getActiveGenre, getErrorFilm };

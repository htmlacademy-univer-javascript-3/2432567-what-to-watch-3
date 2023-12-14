import { NameSpace } from '../../const.ts';
import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films.ts';
import { Genre, State } from '../../types.ts';

const getFilm = (state: Pick<State, NameSpace.Film>): FilmType | null | undefined => state[NameSpace.Film].film;
const getFilms = (state: Pick<State, NameSpace.Film>): FilmInListType[] => state[NameSpace.Film].films;
const getFilmPromo = (state: Pick<State, NameSpace.Film>): FilmPromoType | null => state[NameSpace.Film].filmPromo;
const getSimilarFilms = (state: Pick<State, NameSpace.Film>): FilmInListType[] => state[NameSpace.Film].similarFilms;
const getCountFavoriteFilms = (state: Pick<State, NameSpace.Film>): number => state[NameSpace.Film].favoriteFilms.length;
const getFavoriteFilms = (state: Pick<State, NameSpace.Film>): FilmInListType[] => state[NameSpace.Film].favoriteFilms;
const getGenres = (state: Pick<State, NameSpace.Film>): Genre[] => state[NameSpace.Film].genres;
const getActiveGenre = (state: Pick<State, NameSpace.Film>): Genre => state[NameSpace.Film].activeGenre;
const getErrorFilm = (state: Pick<State, NameSpace.Film>): boolean => state[NameSpace.Film].hasError;

export { getFilms, getFilm, getFavoriteFilms, getFilmPromo, getSimilarFilms, getGenres, getActiveGenre, getErrorFilm, getCountFavoriteFilms };

import { createAction } from '@reduxjs/toolkit';
import { FilmInListType, FilmPromoType, FilmType, Genre } from '../types';

const setActiveGenreAction = createAction<Genre>('setGenre');
const setActiveFilmsAction = createAction<FilmInListType[]>('setFilms');
const addShownFilmsAction = createAction('showMoreFilms');
const defaultShownFilmsAction = createAction('showMoreDefault');
const loadFilmAction = createAction<FilmType>('loadFilm');
const loadFilmsAction = createAction<FilmInListType[]>('loadFilms');
const loadFilmPromoAction = createAction<FilmPromoType>('loadFilmPromo');
const filmsLoadStatusAction = createAction<boolean>('filmsLoadStatus');

export {
  setActiveGenreAction,
  setActiveFilmsAction,
  addShownFilmsAction,
  loadFilmAction,
  defaultShownFilmsAction,
  loadFilmsAction,
  loadFilmPromoAction,
  filmsLoadStatusAction,
};

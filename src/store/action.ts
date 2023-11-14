import { createAction } from '@reduxjs/toolkit';
import { FilmInList, Genre } from '../types';

const setActiveGenreAction = createAction<Genre>('setGenre');
const setActiveFilmsAction = createAction<FilmInList[]>('setFilms');
const addShownFilmsAction = createAction('showMoreFilms');
const defaultShownFilmsAction = createAction('showMoreDefault');
const loadFilmsAction = createAction<FilmInList[]>('loadFilms');
const filmsLoadStatusAction = createAction<boolean>('filmsLoadStatus');

export {
  setActiveGenreAction,
  setActiveFilmsAction,
  addShownFilmsAction,
  defaultShownFilmsAction,
  loadFilmsAction,
  filmsLoadStatusAction,
};

import { createAction } from '@reduxjs/toolkit';
import { FilmInListType, FilmPromoType, FilmType, Genre, Review, User } from '../types';

const setActiveGenreAction = createAction<Genre>('setGenre');
const setActiveFilmsAction = createAction<FilmInListType[]>('setFilms');
const addShownFilmsAction = createAction('showMoreFilms');
const defaultShownFilmsAction = createAction('showMoreDefault');
const loadFilmAction = createAction<FilmType>('loadFilm');
const loadFilmsAction = createAction<FilmInListType[]>('loadFilms');
const loadFilmPromoAction = createAction<FilmPromoType>('loadFilmPromo');
const loadStatusAction = createAction<boolean>('filmsLoadStatus');
const loadReviewsAction = createAction<Review[]>('loadReviewsStatus');
const loginAction = createAction<User>('loginAction');
const logoutAction = createAction('logoutAction');


export {
  setActiveGenreAction,
  setActiveFilmsAction,
  addShownFilmsAction,
  loadFilmAction,
  defaultShownFilmsAction,
  loadFilmsAction,
  loadFilmPromoAction,
  loadStatusAction,
  loadReviewsAction,
  loginAction,
  logoutAction,
};

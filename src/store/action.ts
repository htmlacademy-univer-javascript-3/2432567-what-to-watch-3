import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types';
import { FilmInListType, FilmPromoType, FilmType } from '../schemas/films';
import { Review } from '../schemas/review';
import { User } from '../schemas/login';

const setActiveGenreAction = createAction<Genre>('setGenre');
const setActiveFilmsAction = createAction<FilmInListType[]>('setFilms');
const addShownFilmsAction = createAction('showMoreFilms');
const defaultShownFilmsAction = createAction('showMoreDefault');
const defaultCountShownFilmsAction = createAction('showCountShownFilms');
const loadFilmAction = createAction<FilmType | undefined>('loadFilm');
const loadFilmsAction = createAction<FilmInListType[]>('loadFilms');
const loadFilmPromoAction = createAction<FilmPromoType>('loadFilmPromo');
const loadSimilarFilmsAction = createAction<FilmInListType[]>('loadSimilarFilms');
const loadStatusAction = createAction<boolean>('filmsLoadStatus');
const loadReviewsAction = createAction<Review[]>('loadReviewsStatus');
const addReviewAction = createAction<Review>('addReview');
const loginAction = createAction<User>('loginAction');
const logoutAction = createAction('logoutAction');
const setErrorAction = createAction<boolean>('setError');


export {
  setActiveGenreAction,
  setActiveFilmsAction,
  addShownFilmsAction,
  loadFilmAction,
  defaultShownFilmsAction,
  defaultCountShownFilmsAction,
  loadFilmsAction,
  loadFilmPromoAction,
  loadSimilarFilmsAction,
  loadStatusAction,
  loadReviewsAction,
  addReviewAction,
  loginAction,
  logoutAction,
  setErrorAction,
};

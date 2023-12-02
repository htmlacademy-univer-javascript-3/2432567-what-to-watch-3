import { createReducer } from '@reduxjs/toolkit';
import {
  addShownFilmsAction,
  defaultShownFilmsAction,
  loadStatusAction,
  loadFilmAction,
  loadFilmPromoAction,
  loadFilmsAction,
  setActiveGenreAction,
  loadReviewsAction,
  loginAction,
  logoutAction,
  loadSimilarFilmsAction,
  setErrorAction,
  addReviewAction,
  defaultCountShownFilmsAction,
} from './action';
import { dropToken, setToken } from '../services/token';
import { FilmInListType, FilmPromoType, FilmType } from '../schemas/films';
import { Review } from '../schemas/review';
import { User } from '../schemas/login';
import { Genre } from '../types';

type initialStateProps = {
  activeGenre: string;
  genres: string[];
  film: FilmType | null | undefined;
  shownFilms: FilmInListType[];
  films: FilmInListType[];
  filmPromo: FilmPromoType | null;
  similarFilms: FilmInListType[];
  countShownFilms: number;
  statusLoading: boolean;
  reviews: Review[];
  user: User | null;
  hasError: boolean;
}

const initialState: initialStateProps = {
  activeGenre: 'All genres',
  genres: [],
  film: null,
  shownFilms: [],
  films: [],
  filmPromo: null,
  similarFilms: [],
  countShownFilms: 8,
  statusLoading: false,
  reviews: [],
  user: null,
  hasError: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilms = action.payload === 'All genres' ? state.films : state.films.filter((film) => film.genre === action.payload);
    })
    .addCase(addShownFilmsAction, (state) => {
      state.countShownFilms += 8;
    })
    .addCase(defaultShownFilmsAction, (state) => {
      state.shownFilms = state.films;
    })
    .addCase(defaultCountShownFilmsAction, (state) => {
      state.countShownFilms = 8;
    })
    .addCase(loadFilmsAction, (state, action) => {
      state.films = action.payload;
      state.shownFilms = action.payload;

      const genres = new Set<Genre>(['All genres']);
      action.payload.forEach((film) => genres.add(film.genre));
      state.genres = Array.from(genres).slice(0, 9);
    })
    .addCase(loadFilmPromoAction, (state, action) => {
      state.filmPromo = action.payload;
    })
    .addCase(loadFilmAction, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilmsAction, (state, action) => {
      state.shownFilms = action.payload;
    })
    .addCase(loadStatusAction, (state, action) => {
      state.statusLoading = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReviewAction, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(loginAction, (state, action) => {
      state.user = action.payload;
      setToken(action.payload.token);
    })
    .addCase(logoutAction, (state) => {
      state.user = null;
      dropToken();
    })
    .addCase(setErrorAction, (state, action) => {
      state.hasError = action.payload;
    });
});

export default reducer;

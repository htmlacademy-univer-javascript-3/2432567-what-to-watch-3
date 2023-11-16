import { createReducer } from '@reduxjs/toolkit';
import {
  addShownFilmsAction,
  defaultShownFilmsAction,
  filmsLoadStatusAction,
  loadFilmAction,
  loadFilmPromoAction,
  loadFilmsAction,
  setActiveGenreAction,
} from './action';
import { FilmInListType, FilmPromoType, FilmType, Genre } from '../types';

type initialStateProps = {
  activeGenre: string;
  genres: string[];
  film: FilmType | null;
  shownFilms: FilmInListType[];
  films: FilmInListType[];
  filmPromo: FilmPromoType | null;
  countShownFilms: number;
  statusLoadingFilms: boolean;
}

const initialState: initialStateProps = {
  activeGenre: 'All genres',
  genres: [],
  film: null,
  shownFilms: [],
  films: [],
  filmPromo: null,
  countShownFilms: 8,
  statusLoadingFilms: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.shownFilms = action.payload === 'All genres' ? state.films : state.films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(addShownFilmsAction, (state) => {
      state.countShownFilms += 8;
    })
    .addCase(defaultShownFilmsAction, (state) => {
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
    .addCase(filmsLoadStatusAction, (state, action) => {
      state.statusLoadingFilms = action.payload;
    });
});

export default reducer;

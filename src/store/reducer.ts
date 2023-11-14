import { createReducer } from '@reduxjs/toolkit';
import {
  addShownFilmsAction,
  defaultShownFilmsAction,
  filmsLoadStatusAction,
  loadFilmsAction,
  setActiveGenreAction,
} from './action';
import { FilmInList, Genre } from '../types';

type initialStateProps = {
  activeGenre: string;
  genres: string[];
  activeFilm: FilmInList[];
  films: FilmInList[];
  countShownFilms: number;
  statusLoadingFilms: boolean;
}

const initialState: initialStateProps = {
  activeGenre: 'All genres',
  genres: [],
  activeFilm: [],
  films: [],
  countShownFilms: 8,
  statusLoadingFilms: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.activeFilm = action.payload === 'All genres' ? state.films : state.films.filter((film) => film.genre === state.activeGenre);
    })
    .addCase(addShownFilmsAction, (state) => {
      state.countShownFilms += 8;
    })
    .addCase(defaultShownFilmsAction, (state) => {
      state.countShownFilms = 8;
    })
    .addCase(loadFilmsAction, (state, action) => {
      state.films = action.payload;
      state.activeFilm = action.payload;

      const genres = new Set<Genre>(['All genres']);
      action.payload.forEach((film) => genres.add(film.genre));
      state.genres = Array.from(genres).slice(0, 9);
    })
    .addCase(filmsLoadStatusAction, (state, action) => {
      state.statusLoadingFilms = action.payload;
    });
});

export default reducer;

import { createReducer } from '@reduxjs/toolkit';
import { setGenreAction, loadFilmsByGenreAction, showMoreFilmsAction } from './action';
import { Film } from '../types';
import { Genre } from '../mocks/genres';
import { films } from '../mocks/films';

type initialStateProps = {
  genre: Genre;
  films: Film[];
  countFilmsShown: number;
}

const initialState: initialStateProps = {
  genre: 'All genres',
  films: films as Film[],
  countFilmsShown: 4,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreAction, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(loadFilmsByGenreAction, (state) => {
      state.films = state.genre === 'All genres' ? films as Film[] : films.filter((film) => film.genre === state.genre);
    })
    .addCase(showMoreFilmsAction, (state) => {
      state.countFilmsShown += 4;
    });
});

export default reducer;

import { createReducer } from '@reduxjs/toolkit';
import { setGenreAction, showMoreDefaultAction, showMoreFilmsAction } from './action';
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
  countFilmsShown: 8,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreAction, (state, action) => {
      state.genre = action.payload.genre;
      state.films = state.genre === 'All genres' ? films as Film[] : films.filter((film) => film.genre === state.genre);
      state.countFilmsShown = 8;
    })
    .addCase(showMoreFilmsAction, (state) => {
      state.countFilmsShown += 8;
    })
    .addCase(showMoreDefaultAction, (state) => {
      state.countFilmsShown = 8;
    });
});

export default reducer;

import { createAction } from '@reduxjs/toolkit';

const setGenreAction = createAction<{ genre: string }>('setGenre');
const loadFilmsByGenreAction = createAction('loadFilmsByGenre');
const showMoreFilmsAction = createAction('showMoreFilms');

export { setGenreAction, loadFilmsByGenreAction, showMoreFilmsAction };

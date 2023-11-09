import { createAction } from '@reduxjs/toolkit';

const setGenreAction = createAction<{ genre: string }>('setGenre');
const showMoreFilmsAction = createAction('showMoreFilms');
const showMoreDefaultAction = createAction('showMoreDefault');

export { setGenreAction, showMoreFilmsAction, showMoreDefaultAction };

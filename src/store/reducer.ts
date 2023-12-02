import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmsReducer } from './films/films';
import { reviewsReducer } from './reviews/review';
import { userReducer } from './user/user';

const reducer = combineReducers({
  [NameSpace.Film]: filmsReducer,
  [NameSpace.Review]: reviewsReducer,
  [NameSpace.User]: userReducer,
});

export default reducer;

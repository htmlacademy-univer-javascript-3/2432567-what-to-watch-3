import { AxiosInstance } from 'axios';
import { AppDispatch, FilmInListType, FilmPromoType, FilmType, State } from '../types';
import { filmsLoadStatusAction, loadFilmAction, loadFilmPromoAction, loadFilmsAction } from './action';
import { APIRoutes } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(filmsLoadStatusAction(true));
    const { data } = await api.get<FilmInListType[]>(APIRoutes.Films);
    dispatch(filmsLoadStatusAction(false));
    dispatch(loadFilmsAction(data));
  },
);

const fetchFilmPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmPromoType>(APIRoutes.Promo);
    dispatch(loadFilmPromoAction(data));
  },
);

const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (_arg, { dispatch, extra: api }) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const { data } = await api.get<FilmType>(`${APIRoutes.Film}/${_arg}`);
    dispatch(loadFilmAction(data));
  },
);

export { fetchFilmsAction, fetchFilmPromoAction, fetchFilmAction };

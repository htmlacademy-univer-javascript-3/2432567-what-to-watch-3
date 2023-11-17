import { AxiosInstance } from 'axios';
import { AppDispatch, FilmInListType, FilmPromoType, FilmType, Review, State } from '../types';
import { loadStatusAction, loadFilmAction, loadFilmPromoAction, loadFilmsAction, loadReviewsAction } from './action';
import { APIRoutes } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(loadStatusAction(true));
    const { data } = await api.get<FilmInListType[]>(APIRoutes.Films);
    dispatch(loadStatusAction(false));
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

const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoutes.Film}/${id}`);
    // console.log(data)
    dispatch(loadFilmAction(data));
  },
);

const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Reviews}/${id}`);
    // console.log(data);
    dispatch(loadReviewsAction(data));
  },
);

export { fetchFilmsAction, fetchFilmPromoAction, fetchFilmAction, fetchReviewsAction };

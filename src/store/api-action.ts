import { AxiosInstance } from 'axios';
import { AppDispatch, FilmInListType, FilmPromoType, FilmType, ResultAuthorization, Review, State, User, FormData, DataAuthorization } from '../types';
import { loadStatusAction, loadFilmAction, loadFilmPromoAction, loadFilmsAction, loadReviewsAction, loginAction, logoutAction } from './action';
import { APIRoutes } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchFilms = createAsyncThunk<void, undefined, {
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

const fetchFilmPromo = createAsyncThunk<void, undefined, {
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

const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoutes.Film}/${id}`);
    dispatch(loadFilmAction(data));
  },
);

const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Reviews}/${id}`);
    dispatch(loadReviewsAction(data));
  },
);

const fetchAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/authorizationStatus',
  async (_arg, { dispatch, extra: api }) => {
    const responce = await api.get<ResultAuthorization>(APIRoutes.Login);
    if (responce.status === 200) {
      dispatch(loginAction(responce.data as DataAuthorization));
    }
  },
);

const fetchLogin = createAsyncThunk<void, FormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/login',
  async (formData, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(APIRoutes.Login, formData);
    dispatch(loginAction(data));
  },
);

const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/logout',
  async (_arg, { dispatch, extra: api }) => {
    const { status } = await api.delete(APIRoutes.Logout);
    if (status === 204) {
      dispatch(logoutAction());
    }
  },
);

export { fetchFilms, fetchFilmPromo, fetchFilm, fetchReviews, fetchAuthorizationStatus, fetchLogin, fetchLogout };

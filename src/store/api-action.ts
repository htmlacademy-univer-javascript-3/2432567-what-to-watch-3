import { AxiosInstance } from 'axios';
import { AppDispatch, FilmInListType, FilmPromoType, FilmType, ResultAuthorization, Review, State, User, FormData, DataAuthorization, FormDataReview } from '../types';
import { loadStatusAction, loadFilmAction, loadFilmPromoAction, loadFilmsAction, loadReviewsAction, loginAction, logoutAction, loadSimilarFilmsAction, setErrorAction, addReviewAction } from './action';
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
    await Promise
      .all([
        api.get<FilmType>(APIRoutes.Film(id)),
        api.get<FilmInListType[]>(APIRoutes.Similar(id)),
      ])
      .then(([{ data: film }, { data: similarFilms }]) => {
        dispatch(loadFilmAction(film));
        dispatch(loadSimilarFilmsAction(similarFilms));
        dispatch(setErrorAction(false));
      })
      .catch(() => {
        dispatch(setErrorAction(true));
      });
  },
);

const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(APIRoutes.Reviews(id));
    dispatch(loadReviewsAction(data));
  },
);

const sendReview = createAsyncThunk<void, FormDataReview & { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviews',
  async ({ rating, reviewText: text, id }, { dispatch, extra: api }) => {
    await api
      .post<Review>(APIRoutes.Reviews(id), {
        comment: text,
        rating
      })
      .then(({ data }) => {
        dispatch(addReviewAction(data));
      });
  },
);

const fetchAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/authorizationStatus',
  async (_arg, { dispatch, extra: api }) => {
    await api
      .get<ResultAuthorization>(APIRoutes.Login)
      .then(({ data }) => {
        dispatch(loginAction(data as DataAuthorization));
      });
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

export { fetchFilms, fetchFilmPromo, fetchFilm, fetchReviews, sendReview, fetchAuthorizationStatus, fetchLogin, fetchLogout };

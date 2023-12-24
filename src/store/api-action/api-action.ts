import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types';
import { APIRoutes, AppRoute } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmInListType, FilmPromoType, FilmType } from '../../schemas/films';
import { FormDataLogin, FormDataReview } from '../../schemas/forms';
import { Review } from '../../schemas/review';
import { ResultAuthorization, User } from '../../schemas/login';
import { redirectToRoute } from '../action';

const fetchFilms = createAsyncThunk<FilmInListType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFilms',
  async (_arg, { extra: api }) => await api
    .get<FilmInListType[]>(APIRoutes.Films)
    .then(({ data }) => data)
);

const fetchFilmPromo = createAsyncThunk<FilmPromoType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchPromo',
  async (_arg, { extra: api }) => await api
    .get<FilmPromoType>(APIRoutes.Promo)
    .then(({ data }) => data)
);

const fetchFilm = createAsyncThunk<{
  film: FilmType;
  similarFilms: FilmInListType[];
}, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFilm',
  async (id, { extra: api }) => {
    const [{ data: film }, { data: similarFilms }] = await Promise.all([
      api.get<FilmType>(APIRoutes.Film(id)),
      api.get<FilmInListType[]>(APIRoutes.Similar(id)),
    ]);
    return { film, similarFilms };
  }
);

const fetchFavoriteFilms = createAsyncThunk<FilmInListType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/fetchFavoriteFilms',
  async (_arg, { extra: api }) => await api
    .get<FilmInListType[]>(APIRoutes.Favorite)
    .then(({ data }) => data)
);

const addFavoriteFilm = createAsyncThunk<FilmInListType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/addFavoriteFilm',
  async (id, { extra: api }) => await api
    .post<FilmType>(APIRoutes.SetFavorite(id))
    .then(({ data }) => data as FilmInListType)
);

const dropFavoriteFilm = createAsyncThunk<FilmInListType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'film/dropFavoriteFilm',
  async (id, { extra: api }) => await api
    .post<FilmType>(APIRoutes.DropFavorite(id))
    .then(({ data }) => data as FilmInListType)
);

const fetchReviews = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (id, { extra: api }) => await api
    .get<Review[]>(APIRoutes.Reviews(id))
    .then(({ data }) => data)
);

const sendReview = createAsyncThunk<Review, FormDataReview & { id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/sendReviews',
  async ({ rating, reviewText: text, id }, { dispatch, extra: api }) => await api
    .post<Review>(APIRoutes.Reviews(id), {
      comment: text,
      rating
    })
    .then(({ data }) => {
      dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
      return data;
    })
);

const fetchAuthorizationStatus = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/authorizationStatus',
  async (_arg, { extra: api }) => await api
    .get<ResultAuthorization>(APIRoutes.Login)
    .then(({ data }) => data as User)
);

const login = createAsyncThunk<User, FormDataLogin, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (formData, { dispatch, extra: api }) => await api
    .post<ResultAuthorization>(APIRoutes.Login, formData)
    .then(({ data }) => {
      dispatch(redirectToRoute(AppRoute.Main));
      return data as User;
    })
);

const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoutes.Logout);
  }
);

export {
  fetchFilms,
  fetchFilmPromo,
  fetchFilm,
  fetchFavoriteFilms,
  addFavoriteFilm,
  dropFavoriteFilm,
  fetchReviews,
  sendReview,
  fetchAuthorizationStatus,
  login,
  logout
};

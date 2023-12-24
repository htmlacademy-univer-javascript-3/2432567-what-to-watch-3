import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { State } from '../../types';
import { APIRoutes, DEFAULT_GENRE, NameSpace } from '../../const';
import { addFavoriteFilm, dropFavoriteFilm, fetchAuthorizationStatus, fetchFavoriteFilms, fetchFilm, fetchFilmPromo, fetchFilms, login, logout, fetchReviews, sendReview } from './api-action';
import { extractActionsTypes, makeFakeDataLogin, makeFakeFilm, makeFakeFilmId, makeFakeFilms, makeFakeReview, makeFakeReviews } from '../../mocks/mock';
import { AppThunkDispatch } from '../../mocks/mock-types';
import { redirectToRoute } from '../action';
import createAxios from '../../services/api';

describe('Async actions', () => {
  const axios = createAxios();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.Film]: {
        genres: [],
        activeGenre: DEFAULT_GENRE,
        film: null,
        films: [],
        filmPromo: null,
        similarFilms: [],
        favoriteFilms: [],
        hasError: false,
      },
      [NameSpace.Review]: {
        reviews: [],
        statusLoading: false,
        hasError: false,
      },
      [NameSpace.User]: {
        user: null,
        error: false,
      }
    });
  });

  describe('fetchFilms', () => {
    const films = makeFakeFilms();
    const action = fetchFilms;
    const adapter = mockAxiosAdapter.onGet(APIRoutes.Films);

    it('pending and fulfilled', async () => {
      adapter.reply(200, films);
      await store.dispatch(action());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const fetchFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilms.fulfilled>;
      expect(fetchFilmsFulfilled.payload).toEqual(films);
    });

    it('pending and rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Films).reply(404);
      await store.dispatch(fetchFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('fetchFilmPromo', () => {
    const film = makeFakeFilm();
    const action = fetchFilmPromo;
    const adapter = mockAxiosAdapter.onGet(APIRoutes.Promo);

    it('pending and fulfilled', async () => {
      adapter.reply(200, film);
      await store.dispatch(action());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const fetchFilmPromoFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(fetchFilmPromoFulfilled.payload).toEqual(film);
    });

    it('pending and rejected', async () => {
      adapter.reply(404);
      await store.dispatch(action());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('fetchFilm', () => {
    const { film, similarFilms } = makeFakeFilm();
    const action = fetchFilm;

    it('pending and fulfilled', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Film(film.id)).reply(200, film);
      mockAxiosAdapter.onGet(APIRoutes.Similar(film.id)).reply(200, similarFilms);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const fetchFilmActionFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(fetchFilmActionFulfilled.payload).toEqual({ film, similarFilms });
    });

    it('pending and rejected', async () => {
      mockAxiosAdapter.onGet(APIRoutes.Film(film.id)).reply(404);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteFilms', () => {
    const films = makeFakeFilms();
    const action = fetchFavoriteFilms;
    const adapter = mockAxiosAdapter.onGet(APIRoutes.Favorite);

    it('pending and fulfilled', async () => {
      adapter.reply(200, films);
      await store.dispatch(action());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const fetchFavoriteFilmsFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(fetchFavoriteFilmsFulfilled.payload).toEqual(films);
    });

    it('pending and rejected', async () => {
      adapter.reply(404);
      await store.dispatch(action());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('addFavoriteFilm', () => {
    const { film } = makeFakeFilm();
    const action = addFavoriteFilm;
    const adapter = mockAxiosAdapter.onPost(APIRoutes.SetFavorite(film.id));

    it('pending and fulfilled', async () => {
      film.isFavorite = !film.isFavorite;
      adapter.reply(200, film);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const addFavoriteFilmFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(addFavoriteFilmFulfilled.payload).toEqual(film);
    });

    it('pending and rejected', async () => {
      adapter.reply(404);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('dropFavoriteFilm', () => {
    const { film } = makeFakeFilm();
    const action = dropFavoriteFilm;
    const adapter = mockAxiosAdapter.onPost(APIRoutes.DropFavorite(film.id));

    it('pending and fulfilled', async () => {
      adapter.reply(200, film);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const dropFavoriteFilmFilmsActionFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(dropFavoriteFilmFilmsActionFulfilled.payload).toEqual(film);
    });

    it('pending and rejected', async () => {
      mockAxiosAdapter.onPost(APIRoutes.DropFavorite(film.id)).reply(404);
      await store.dispatch(action(film.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('fetchReviews', () => {
    const id = makeFakeFilmId();
    const action = fetchReviews;
    const adapter = mockAxiosAdapter.onGet(APIRoutes.Reviews(id));

    it('pending and fulfilled', async () => {
      const mockFilmReviews = [makeFakeReviews()];
      adapter.reply(200, mockFilmReviews);
      await store.dispatch(action(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);

      const fetchReviewsFulfilled = emittedActions.at(1) as ReturnType<typeof action.fulfilled>;
      expect(fetchReviewsFulfilled.payload).toEqual(mockFilmReviews);
    });

    it('pending and rejected', async () => {
      adapter.reply(404);
      await store.dispatch(action(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('sendReview', () => {
    const review = makeFakeReview();
    const action = sendReview;
    const adapter = mockAxiosAdapter.onPost(APIRoutes.Reviews(review.id));

    it('pending and fulfilled', async () => {
      adapter.reply(200, review);
      await store.dispatch(action({
        id: review.id,
        rating: review.rating,
        reviewText: review.comment,
      }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        redirectToRoute.type,
        action.fulfilled.type,
      ]);
    });

    it('pending and rejected', async () => {
      adapter.reply(404);
      await store.dispatch(action({ rating: review.rating, reviewText: review.comment, id: review.id }));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      expect(extractedActionsTypes).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('fetchAuthorizationStatus', () => {
    const action = fetchAuthorizationStatus;
    const adapter = mockAxiosAdapter.onGet(APIRoutes.Login);

    it('pending and fulfilled', async () => {
      adapter.reply(200);
      await store.dispatch(action());

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);
    });

    it('pending and rejected', async () => {
      adapter.reply(401);
      await store.dispatch(action());

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    const action = login;
    const adapter = mockAxiosAdapter.onPost(APIRoutes.Login);
    const dataLogin = makeFakeDataLogin();

    it('pending and fulfilled', async () => {
      adapter.reply(200);
      await store.dispatch(action(dataLogin));

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        redirectToRoute.type,
        action.fulfilled.type,
      ]);
    });

    it('pending and rejected', async () => {
      adapter.reply(401);
      await store.dispatch(action(dataLogin));

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });

  describe('logout', () => {
    const action = logout;
    const adapter = mockAxiosAdapter.onDelete(APIRoutes.Logout);

    it('pending and fulfilled', async () => {
      adapter.reply(200);
      await store.dispatch(action());

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        action.fulfilled.type,
      ]);
    });

    it('pending and rejected', async () => {
      adapter.reply(401);
      await store.dispatch(action());

      const actions = extractActionsTypes(store.getActions());
      expect(actions).toEqual([
        action.pending.type,
        action.rejected.type,
      ]);
    });
  });
});

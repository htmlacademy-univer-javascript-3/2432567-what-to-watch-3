import findGenres from '../../utils/get-genres';
import { makeFakeFilm, makeFakeFilmInList, makeFakeFilms, makeFakePromoFilm } from '../../mocks/mock';
import { addFavoriteFilm, dropFavoriteFilm, fetchFavoriteFilms, fetchFilm, fetchFilmPromo, fetchFilms } from '../api-action/api-action';
import { filmsActions, filmsReducer } from './films';
import { initialStateProps } from './films.props';

describe('films slice', () => {
  const initialState: initialStateProps = {
    genres: [],
    activeGenre: 'All genres',
    film: null,
    films: [],
    filmPromo: null,
    similarFilms: [],
    favoriteFilms: [],
    hasError: false,
  };

  describe('initial state', () => {
    it('empty action', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = filmsReducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('empty action and undefined state', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = filmsReducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilms', () => {
    it('fetchFilms.reject', () => {
      const expectedState = { ...initialState, hasError: true };

      const result = filmsReducer(initialState, fetchFilms.rejected);

      expect(result).toEqual(expectedState);
    });

    it('fetchFilms.fulfilled', () => {
      const films = makeFakeFilms();
      const genres = findGenres(films);
      const expectedState = { ...initialState, films, genres };

      const result = filmsReducer(initialState, fetchFilms.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchFilm', () => {
    it('fetchFilm.rejected', () => {
      const expectedState = { ...initialState, hasError: true };

      const result = filmsReducer(initialState, fetchFilm.rejected);

      expect(result).toEqual(expectedState);
    });

    it('fetchFilm.fulfilled', () => {
      const { film, similarFilms } = makeFakeFilm();
      const expectedState = { ...initialState, film, similarFilms };

      const result = filmsReducer(initialState, fetchFilm.fulfilled({ film, similarFilms }, '', ''));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchPromoFilm', () => {
    it('fetchPromoFilm.rejected', () => {
      const expectedState = { ...initialState, hasError: true };

      const result = filmsReducer(initialState, fetchFilmPromo.rejected);

      expect(result).toEqual(expectedState);
    });

    it('fetchPromoFilm.fulfilled', () => {
      const filmPromo = makeFakePromoFilm();
      const expectedState = { ...initialState, filmPromo };

      const result = filmsReducer(initialState, fetchFilmPromo.fulfilled(filmPromo, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('favoriteFilms', () => {
    describe('fetchFavoriteFilms', () => {
      it('fetchFavoriteFilms.rejected', () => {
        const expectedState = { ...initialState, favoriteFilms: [] };

        const result = filmsReducer(initialState, fetchFavoriteFilms.rejected);

        expect(result).toEqual(expectedState);
      });

      it('fetchFavoriteFilms.fulfilled', () => {
        const films = makeFakeFilms();
        const expectedState = { ...initialState, favoriteFilms: films };

        const result = filmsReducer(initialState, fetchFavoriteFilms.fulfilled(films, '', undefined));

        expect(result).toEqual(expectedState);
      });
    });

    describe('addFavoriteFilms', () => {
      it('addFavoriteFilms.fulfilled', () => {
        const film = makeFakeFilmInList();
        const expectedState = { ...initialState, favoriteFilms: [film] };

        const result = filmsReducer(initialState, addFavoriteFilm.fulfilled(film, '', ''));

        expect(result).toEqual(expectedState);
      });
    });

    describe('dropFavoriteFilms', () => {
      it('dropFavoriteFilms.fulfilled', () => {
        const films = makeFakeFilms();
        const film = films.pop();
        const expectedState = { ...initialState, favoriteFilms: films };

        const result = filmsReducer({
          ...initialState,
          favoriteFilms: films
        }, dropFavoriteFilm.fulfilled(film, '', ''));

        expect(result).toEqual(expectedState);
      });
    });
  });

  describe('genres', () => {
    it('defaultGenre', () => {
      const expectedState = initialState;

      const result = filmsReducer({
        ...initialState,
        activeGenre: 'Comedy',
      }, filmsActions.defaultGenreAction);

      expect(result).toEqual(expectedState);
    });

    it('setActiveGenreAction', () => {
      const genre = 'Comedy';
      const expectedState = {
        ...initialState,
        activeGenre: genre
      };

      const result = filmsReducer(initialState, filmsActions.setActiveGenreAction(genre));

      expect(result).toEqual(expectedState);
    });
  });
});

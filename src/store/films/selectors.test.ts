import { NameSpace } from '../../const';
import { makeFakeFilm, makeFakeFilms, makeFakePromoFilm } from '../../mocks/mock';
import {
  getFilms,
  getFilm,
  getFavoriteFilms,
  getFilmPromo,
  getSimilarFilms,
  getGenres,
  getActiveGenre,
  getErrorFilm
} from './selectors';

describe('films selectors', () => {
  const state = {
    [NameSpace.Film]: {
      ...makeFakeFilm(),
      genres: [],
      activeGenre: 'All genres',
      films: makeFakeFilms(),
      isFilmsLoading: true,
      filmPromo: makeFakePromoFilm(),
      favoriteFilms: makeFakeFilms(),
      hasError: false,
    }
  };

  it('getFilm', () => {
    const { film } = state[NameSpace.Film];

    const result = getFilm(state);

    expect(result).toBe(film);
  });

  it('getFilms', () => {
    const { films } = state[NameSpace.Film];

    const result = getFilms(state);

    expect(result).toBe(films);
  });

  it('getFilmPromo', () => {
    const { filmPromo } = state[NameSpace.Film];

    const result = getFilmPromo(state);

    expect(result).toBe(filmPromo);
  });

  it('getSimilarFilms', () => {
    const { similarFilms } = state[NameSpace.Film];

    const result = getSimilarFilms(state);

    expect(result).toBe(similarFilms);
  });

  it('getFavoriteFilms', () => {
    const { favoriteFilms } = state[NameSpace.Film];

    const result = getFavoriteFilms(state);

    expect(result).toBe(favoriteFilms);
  });

  it('getSimilarFilms', () => {
    const { similarFilms } = state[NameSpace.Film];

    const result = getSimilarFilms(state);

    expect(result).toBe(similarFilms);
  });

  it('getGenres', () => {
    const { genres } = state[NameSpace.Film];

    const result = getGenres(state);

    expect(result).toBe(genres);
  });

  it('getGenres', () => {
    const { genres } = state[NameSpace.Film];

    const result = getGenres(state);

    expect(result).toBe(genres);
  });

  it('getActiveGenre', () => {
    const { activeGenre } = state[NameSpace.Film];

    const result = getActiveGenre(state);

    expect(result).toBe(activeGenre);
  });

  it('getErrorFilm', () => {
    const { hasError } = state[NameSpace.Film];

    const result = getErrorFilm(state);

    expect(result).toBe(hasError);
  });
});
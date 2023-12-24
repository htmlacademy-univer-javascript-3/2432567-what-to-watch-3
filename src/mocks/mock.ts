import { name, datatype, random, finance, image, internet } from 'faker';
import { Action } from '@reduxjs/toolkit';
import { Review } from '../schemas/review';
import { FilmInListType, FilmPromoType, FilmType } from '../schemas/films';
import { User } from '../schemas/login';
import { FormDataLogin } from '../schemas/forms';
import { AuthorizationStatus, DEFAULT_GENRE, NameSpace } from '../const';
import { Genre, State } from '../types';
import { humanizeFormate } from '../utils/utils';

const makeFakeReview = (): Review => ({
  id: random.alpha({ count: 10 }),
  date: humanizeFormate(String(datatype.datetime())),
  user: name.firstName(),
  comment: random.words(),
  rating: Number(finance.amount(1, 10, 0)),
});

const makeFakeReviews = (): Review[] => ([
  {
    id: random.alpha({ count: 10 }),
    date: humanizeFormate(String(datatype.datetime())),
    user: name.firstName(),
    comment: random.words(),
    rating: Number(finance.amount(1, 10, 0)),
  },
  {
    id: random.alpha({ count: 10 }),
    date: humanizeFormate(String(datatype.datetime())),
    user: name.firstName(),
    comment: random.words(),
    rating: Number(finance.amount(1, 10, 0)),
  }
]);

const makeFakeFilmInList = (): FilmInListType => ({
  id: random.alpha({ count: 10 }),
  name: random.word(),
  previewImage: image.imageUrl(),
  previewVideoLink: internet.url(),
  genre: random.word(),
});

const makeFakeFilm = (): {
  film: FilmType;
  similarFilms: FilmInListType[];
} => {
  const film = {
    id: random.alpha({ count: 10 }),
    name: random.word(),
    previewImage: image.imageUrl(),
    previewVideoLink: internet.url(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    backgroundColor: '#ffffff',
    videoLink: internet.url(),
    description: random.words(),
    rating: Number(finance.amount(1, 10, 0)),
    scoresCount: Number(finance.amount(1, 10, 1)),
    director: name.firstName(),
    starring: [name.firstName(), name.firstName()],
    runTime: Number(finance.amount(1, 100, 0)),
    genre: random.word(),
    released: Number(finance.amount(1, 100, 0)),
    isFavorite: false,
  };

  const films = [
    {
      id: random.alpha({ count: 10 }),
      name: random.word(),
      previewImage: image.imageUrl(),
      previewVideoLink: internet.url(),
      genre: random.word(),
    },
    {
      id: random.alpha({ count: 10 }),
      name: random.word(),
      previewImage: image.imageUrl(),
      previewVideoLink: internet.url(),
      genre: random.word(),
    }
  ];
  return { film, similarFilms: films };
};

const makeFakeFilms = (): FilmInListType[] => Array(8).fill(null).map(() => {
  const { film } = makeFakeFilm();
  return film;
});

const makeFakePromoFilm = (): FilmPromoType => ({
  id: random.alpha({ count: 10 }),
  name: random.word(),
  posterImage: image.imageUrl(),
  backgroundImage: '#ffffff',
  videoLink: internet.url(),
  genre: random.word(),
  released: Number(finance.amount(1, 100, 0)),
  isFavorite: false,
});

const makeFakeFilmId = (): string => random.alpha({ count: 10 });

const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const makeFakeUser = (): User => ({
  name: random.word(),
  avatarUrl: image.imageUrl(),
  email: internet.email(),
  token: random.word()
});

const makeFakeDataLogin = (): FormDataLogin => ({
  email: internet.email(),
  password: internet.password(),
});

const makeFakeGenres = (): Genre[] => [random.word(), random.word(), random.word(), 'All genres'];

const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.Film]: {
    genres: makeFakeGenres(),
    activeGenre: DEFAULT_GENRE,
    ...makeFakeFilm(),
    films: makeFakeFilms(),
    filmPromo: makeFakePromoFilm(),
    favoriteFilms: makeFakeFilms(),
    statusLoading: false,
    hasError: false,
  },
  [NameSpace.Review]: {
    reviews: makeFakeReviews(),
    statusLoading: false,
    hasError: false,
  },
  [NameSpace.User]: {
    user: makeFakeUser(),
    authorizationStatus: AuthorizationStatus.Auth,
    error: false,
  },
  ...initialState ?? {}
});

export {
  makeFakeReview,
  makeFakeReviews,
  makeFakeFilmInList,
  makeFakeFilm,
  makeFakeFilms,
  makeFakePromoFilm,
  makeFakeFilmId,
  extractActionsTypes,
  makeFakeUser,
  makeFakeDataLogin,
  makeFakeStore
};

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films',
  Player = '/player',
  NotFoundPage = '*',
}

enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

const APIRoutes = {
  Films: '/films',
  Promo: '/promo',
  Film: (id: string) => `/films/${id}`,
  Reviews: (id: string) => `/comments/${id}`,
  Similar: (id: string) => `/films/${id}/similar`,
  Favorite: '/favorite',
  SetFavorite: (id: string) => `/favorite/${id}/1`,
  DropFavorite: (id: string) => `/favorite/${id}/0`,
  Login: '/login',
  Logout: '/logout',
};

enum NameSpace {
  Film = 'FILM',
  Review = 'REVIEW',
  User = 'USER',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const COUNT_FILMS_SHOWN = 8;
const DEFAULT_GENRE = 'All genres';
const COUNT_MAX_GENRES = 10;
const LENGTH_TEXT_REVIEW = {
  MIN: 50,
  MAX: 400,
};

export { AppRoute, TabsType, APIRoutes, NameSpace, AuthorizationStatus, COUNT_FILMS_SHOWN, DEFAULT_GENRE, COUNT_MAX_GENRES, LENGTH_TEXT_REVIEW };

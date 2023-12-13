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

export { AppRoute, TabsType, APIRoutes, NameSpace };

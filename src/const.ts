enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films',
  Player = '/player',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

enum APIRoutes {
  Films = '/films',
  Promo = '/promo',
  Film = '/films'
}

export { AppRoute, AuthorizationStatus, TabsType, APIRoutes };

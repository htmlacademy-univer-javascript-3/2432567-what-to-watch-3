enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films',
  Player = '/player/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export { AppRoute, AuthorizationStatus };

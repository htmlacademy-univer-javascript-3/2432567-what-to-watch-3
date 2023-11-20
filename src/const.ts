enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/myList',
  Film = '/films',
  Player = '/player',
}

enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

enum APIRoutes {
  Films = '/films',
  Promo = '/promo',
  Film = '/films',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export { AppRoute, TabsType, APIRoutes };

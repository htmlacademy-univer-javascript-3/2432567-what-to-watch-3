import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Film } from '../../types';
import { AppRoute, AuthorizationStatus } from '../../const';


export default function App({ data }: { data: ReadonlyArray<Film> }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={data} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route index element={<NotFoundPage />} />
          <Route path='/:id'>
            <Route index element={<MoviePage />} />
            <Route path='/review' element={<AddReviewPage />} />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<NotFoundPage />} />
          <Route path='/:id' element={<PlayerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

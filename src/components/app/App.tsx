import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import * as pages from './all-pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<pages.MainPage />} />
        <Route path={AppRoute.SignIn} element={<pages.SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <pages.PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <pages.MyListPage />
            </pages.PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id'>
            <Route index element={<pages.MoviePage />} />
            <Route path='review' element={<pages.AddReviewPage />} />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id' element={<pages.PlayerPage />} />
        </Route>
        <Route path="*" element={<pages.NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

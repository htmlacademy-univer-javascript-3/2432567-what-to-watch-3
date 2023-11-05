import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Film } from '../../types';
import { AppRoute, AuthorizationStatus } from '../../const';
import * as pages from './all-pages';
import { Genres } from '../../mocks/genres';

type AppProps = {
  films: readonly Film[];
  genres: Genres;
}

export default function App({ films, genres }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<pages.MainPage genres={genres} />} />
        <Route path={AppRoute.SignIn} element={<pages.SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <pages.PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <pages.MyListPage films={films} />
            </pages.PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id'>
            <Route index element={<pages.MoviePage films={films} />} />
            <Route path='review' element={<pages.AddReviewPage films={films} />} />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id' element={<pages.PlayerPage films={films} />} />
        </Route>
        <Route path="*" element={<pages.NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

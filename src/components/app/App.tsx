import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Films } from '../../types';
import { AppRoute, AuthorizationStatus } from '../../const';
import * as pages from './all-pages';


export default function App({ films }: Films) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<pages.MainPage films={films} />} />
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
            <Route index element={<pages.MoviePage films={films}/>} />
            <Route path='review' element={<pages.AddReviewPage films={films}/>} />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id' element={<pages.PlayerPage films={films}/>} />
        </Route>
        <Route path="*" element={<pages.NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

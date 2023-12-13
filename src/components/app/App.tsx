import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import * as pages from './all-pages';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchFavoriteFilms } from '../../store/api-action/api-action';
import { useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [authorizationStatus, dispatch]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<pages.MainPage />} />
        <Route path={AppRoute.SignIn} element={<pages.SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <pages.PrivateRoute >
              <pages.MyListPage />
            </pages.PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id'>
            <Route index element={<pages.MoviePage />} />
            <Route
              path='review'
              element={
                <pages.PrivateRoute >
                  <pages.AddReviewPage />
                </pages.PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path={AppRoute.Player}>
          <Route index element={<pages.NotFoundPage />} />
          <Route path=':id' element={<pages.PlayerPage />} />
        </Route>
        <Route path="*" element={<pages.NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;

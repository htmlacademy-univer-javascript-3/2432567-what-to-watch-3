import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review/add-review';
import PlayerPage from '../../pages/player/player';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Film } from '../../types';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';


function App({ data }: { data: ReadonlyArray<Film> }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage films={data} />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReviewPage />} />

        {/*
          <Route path={AppRoute.Film} element={<Layout />}>
            <Route index element={<MoviePage />} />
            <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
          </Route>

          ВОПРОС: Наличие в родительском Route атрубута element означает, что компонент, переданный в element, является общим для дочерних Route-ов?

          ВОПРОС: Вместо компонента Outlet, который расположен внутри element-компонента родительского Route (element={<Layout />}), подставляется element-компонент переданный в дочерний Route (element={<MoviePage />})?

          ВОПРОС: Ecли element-компонент родительского Route отсутствует, то element-компонент дочернего Route рендарится как целая страница?

          ВОПРОС: Если на страницах нет общих компонентов, однако urlpath связан, то нас не надо группировать в один Route? Например, Main и SignIn. Странички разные, а url на первом слэше одинаковый.
        */}

        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;

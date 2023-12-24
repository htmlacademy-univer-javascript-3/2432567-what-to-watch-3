import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block/user-block';
import { fetchFavoriteFilms } from '../../store/api-action/api-action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FilmInListType } from '../../schemas/films';
import { getFavoriteFilms, getStatusLoading } from '../../store/films/selectors';
import Spinner from '../../components/spinner/spinner';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector(getFavoriteFilms) as FilmInListType[];
  const statusLoading = useAppSelector(getStatusLoading);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  if (statusLoading) {
    return <Spinner />;
  }
  return (
    <div className="user-page">
      <Helmet>
        <title>Мои фильмы</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;

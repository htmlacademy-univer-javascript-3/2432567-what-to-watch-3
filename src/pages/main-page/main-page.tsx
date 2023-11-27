import { useEffect } from 'react';
import FilmsList from '../../components/film-list/film-list';
import FilmPromo from '../../components/film-promo/film-promo';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Loading from '../../components/loading/loading';
import { FilmPromoType } from '../../schemas/films';
import { getFilmPromo, getStatusLoadingFilms } from '../../store/films/selectors';
import { filmsActions } from '../../store/films/films';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmPromo) as FilmPromoType;

  useEffect(() => {
    dispatch(filmsActions.defaultShownFilmsAction());
    dispatch(filmsActions.defaultCountShownFilmsAction());
  }, [dispatch]);

  const isFilmsLoad = useAppSelector(getStatusLoadingFilms);
  if (isFilmsLoad) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <FilmPromo />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

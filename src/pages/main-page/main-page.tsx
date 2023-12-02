import { useEffect } from 'react';
import FilmsList from '../../components/film-list/film-list';
import FilmPromo from '../../components/film-promo/film-promo';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { defaultCountShownFilmsAction, defaultShownFilmsAction } from '../../store/action';
import Loading from '../../components/loading/loading';
import { FilmPromoType } from '../../schemas/films';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => state.filmPromo) as FilmPromoType;

  useEffect(() => {
    dispatch(defaultShownFilmsAction());
    dispatch(defaultCountShownFilmsAction());
  }, [dispatch]);

  const isFilmsLoad = useAppSelector((state) => (state.statusLoading));
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

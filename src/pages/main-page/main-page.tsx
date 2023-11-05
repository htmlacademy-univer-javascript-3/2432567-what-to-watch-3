import { useEffect } from 'react';
import FilmsList from '../../components/film-list/film-list';
import FilmPromo from '../../components/film-promo/film-promo';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks/genres';
import { Genres } from '../../mocks/genres';
import { showMoreDefaultAction } from '../../store/action';
import { Film } from '../../types';

type MainPageProps = {
  genres: Genres;
}

function MainPage({ genres }: MainPageProps): JSX.Element {
  const films = useAppSelector((state) => state.films) as Film[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showMoreDefaultAction());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <FilmPromo film={films[0]} />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres} />
          <FilmsList films={films.slice(1)} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

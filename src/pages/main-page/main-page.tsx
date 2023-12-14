import { useEffect } from 'react';
import FilmsList from '../../components/film-list/film-list';
import FilmPromo from '../../components/film-promo/film-promo';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Loading from '../../components/loading/loading';
import { FilmInListType, FilmPromoType } from '../../schemas/films';
import { getActiveGenre, getFilmPromo, getFilms } from '../../store/films/selectors';
import { filmsActions } from '../../store/films/films';
import { Genre } from '../../types';
import { fetchFilmPromo } from '../../store/api-action/api-action';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmPromo) as FilmPromoType;
  const films = useAppSelector(getFilms) as FilmInListType[];
  const genre = useAppSelector(getActiveGenre) as Genre;

  useEffect(() => {
    dispatch(filmsActions.defaultGenreAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilmPromo());
  }, [dispatch]);

  if (!film || !films) {
    return <Loading />;
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
          <FilmPromo film={film} />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <FilmsList films={
            genre === 'All genres' ? films : films.filter((item) => item.genre === genre)
          }
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

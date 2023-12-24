import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/film-list/film-list';
import FilmPromo from '../../components/film-promo/film-promo';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FilmInListType, FilmPromoType } from '../../schemas/films';
import { getActiveGenre, getFilmPromo, getFilms, getStatusLoading } from '../../store/films/selectors';
import { filmsActions } from '../../store/films/films';
import { Genre } from '../../types';
import { fetchFilmPromo } from '../../store/api-action/api-action';
import { DEFAULT_GENRE } from '../../const';
import Spinner from '../../components/spinner/spinner';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilmPromo) as FilmPromoType;
  const films = useAppSelector(getFilms) as FilmInListType[];
  const genre = useAppSelector(getActiveGenre) as Genre;
  const statusLoading = useAppSelector(getStatusLoading);

  useEffect(() => {
    dispatch(filmsActions.defaultGenreAction());
    dispatch(fetchFilmPromo());
  }, [dispatch]);

  if (statusLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <FilmPromo film={film}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={
            genre === DEFAULT_GENRE ? films : films.filter((item) => item.genre === genre)
          }
          />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block/user-block';
import FormReview from '../../components/form-review/form-review';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchFilm } from '../../store/api-action/api-action';
import { useEffect } from 'react';
import { FilmType } from '../../schemas/films';
import { getErrorFilm, getFilm, getStatusLoading } from '../../store/films/selectors';
import Spinner from '../../components/spinner/spinner';
import { Helmet } from 'react-helmet-async';
import NotFoundPage from '../not-found-page/not-found-page';

function AddReviewPage(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm) as FilmType;
  const error = useAppSelector(getErrorFilm) as boolean;
  const statusLoading = useAppSelector(getStatusLoading);

  useEffect(() => {
    if (id && id !== film?.id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, film, id]);

  if (error) {
    return <NotFoundPage />;
  }
  if (statusLoading) {
    return <Spinner />;
  }
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>{film.name} | Новый отзыв</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${film.id}/review`} className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>
      <FormReview film={film} />
    </section>
  );
}

export default AddReviewPage;

import { Link, useParams } from 'react-router-dom';
import { Film } from '../../types';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FormReview from '../../components/form-review/form-review';
import { useAppSelector } from '../../store/hooks';

function AddReviewPage(): JSX.Element {
  const { id } = useParams();
  const films = useAppSelector((state) => state.films) as Film[];
  const film = films.find((item) => item.id === id) as Film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.name}
          />
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
                <Link to={`${AppRoute.Film}/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <FormReview />
    </section>
  );
}

export default AddReviewPage;

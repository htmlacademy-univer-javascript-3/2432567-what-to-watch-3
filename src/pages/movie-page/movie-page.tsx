import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { Film, Films } from '../../types';
import { AppRoute } from '../../const';
import FilmsList from '../../components/film-list/film-list';

function MoviePage({ films }: Films): JSX.Element {
  const { id } = useParams();
  const film = films.find((item) => item.id === id) as Film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.bgImg}
              alt={film.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link to={`${AppRoute.Film}/${film.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImg}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">
                      Overview
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is Link popular European ski
                  resort, presided over by concierge Gustave H. (Ralph Fiennes).
                  Zero, Link junior lobby boy, becomes Gustave&apos;s friend and protege.
                </p>
                <p>
                  Gustave prides himself on providing first-class service to the
                  hotel&apos;s guests, including satisfying the sexual needs of the many
                  elderly women who stay there. When one of Gustave&apos;s lovers dies
                  mysteriously, Gustave finds himself the recipient of Link priceless
                  painting and the chief suspect in her murder.
                </p>
                <p className="film-card__director">
                  <strong>Director: Wes Anderson</strong>
                </p>
                <p className="film-card__starring">
                  <strong>
                    Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and
                    other
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films.filter((item) => item !== film)} count={ 3 }/>
        </section>
        <Footer />
      </div>
    </>

  );
}

export default MoviePage;

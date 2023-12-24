import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmPromoType } from '../../schemas/films';
import MyListButton from '../my-list-button/my-list-button';
import React from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block/user-block';

function FilmPromoComponent({ film }: { film: FilmPromoType }): JSX.Element {
  return (
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
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width={218} height={327} />
          </div>
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
              <MyListButton film={film} />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

const FilmPromo = React.memo(FilmPromoComponent);
export default FilmPromo;

/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmPromoType } from '../../schemas/films';
import MyListButton from '../my-list-btn/my-list-btn';
import React from 'react';

function FilmPromo({ film }: { film: FilmPromoType }): JSX.Element {
  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img
          src={film.posterImage}
          alt={film.name}
          width={218}
          height={327}
        />
      </div>
      <div className="film-card__desc">
        <h2 className="film-card__title">{film.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{film.genre || ''}</span>
          <span className="film-card__year">{film.released || ''}</span>
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
  );
}

export default React.memo(FilmPromo);

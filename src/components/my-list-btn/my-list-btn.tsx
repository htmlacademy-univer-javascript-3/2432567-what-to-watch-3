import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getCountFavoriteFilms } from '../../store/films/selectors';
import { FilmPromoType, FilmType } from '../../schemas/films';
import { addFavoriteFilm, dropFavoriteFilm } from '../../store/api-action/api-action';
import { useEffect, useState } from 'react';

function MyListButton({ film }: { film: FilmType | FilmPromoType }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const countFavoriteFilms = useAppSelector(getCountFavoriteFilms) as number;
  const [isFavorite, setFavorite] = useState<boolean>(film.isFavorite);

  useEffect(() => {
    setFavorite(film.isFavorite);
  }, [film]);

  const handlerOnClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
      return;
    }
    if (!isFavorite) {
      dispatch(addFavoriteFilm(film.id));
    } else {
      dispatch(dropFavoriteFilm(film.id));
    }
    setFavorite(!isFavorite);
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handlerOnClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={!isFavorite || !authorizationStatus ? '#add' : '#in-list'} />
      </svg>
      <span>My list</span>
      {countFavoriteFilms > 0 && <span className="film-card__count">{countFavoriteFilms}</span>}
    </button>
  );
}

export default MyListButton;

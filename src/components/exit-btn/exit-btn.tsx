import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmType } from '../../schemas/films';
import React from 'react';

function ExitButtonComponent({ film }: { film: FilmType }): JSX.Element {
  return (
    <Link
      to={`${AppRoute.Film}/${film.id}`}
      type="button"
      className="player__exit"
      data-testid="player__exit"
    >
      Exit
    </Link>
  );
}

const ExitButton = React.memo(ExitButtonComponent);
export default ExitButton;

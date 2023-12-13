/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmType } from '../../schemas/films';
import React from 'react';

function ExitButton({film}: {film: FilmType}): JSX.Element {
  return (
    <Link to={`${AppRoute.Film}/${film.id}`} type="button" className="player__exit" data-testid="player__exit">
      Exit
    </Link>
  );
}

export default React.memo(ExitButton);

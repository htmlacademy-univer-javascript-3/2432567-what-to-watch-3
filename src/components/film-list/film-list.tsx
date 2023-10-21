import { Film, Films } from '../../types';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';

export default function FilmsList({ films, count = -1 }: Films & { count?: number }) {
  const [acitveFilm, setActiveFilm] = useState({});

  return (
    <div className="catalog__films-list">
      {
        films
          .slice(0, (count > films.length) || count === -1 ? films.length : count)
          .map((film: Film) => (
            <FilmCard
              key={film.id}
              film={film}
              onMouseOver={() => {
                setActiveFilm(film);
                return acitveFilm;
              }}
            />
          ))
      }
    </div >
  );
}

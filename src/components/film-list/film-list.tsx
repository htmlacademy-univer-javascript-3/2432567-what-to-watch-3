import { Film, Films } from '../../types';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';

export default function FilmsList({ films, count = -1 }: Films & { count?: number }) {
  const [acitveFilm, setActiveFilm] = useState('');
  let timer: NodeJS.Timeout;

  const handlerMouseOver = (film: Film) => {
    timer = setTimeout(() => {
      setActiveFilm(film.id);
    }, 1000);
  };

  const handlerMouseOut = () => {
    clearTimeout(timer);
    setActiveFilm('');
  };

  return (
    <div className="catalog__films-list">
      {
        films
          .slice(0, (count > films.length) || count === -1 ? films.length : count)
          .map((film: Film) => (
            <FilmCard
              key={film.id}
              film={film}
              isPlaying={film.id === acitveFilm}
              onMouseOver={handlerMouseOver}
              onMouseOut={handlerMouseOut}
            />
          ))
      }
    </div >
  );
}

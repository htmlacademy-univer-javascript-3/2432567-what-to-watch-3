import { useAppSelector } from '../../hooks/genres';
import { Film, Films } from '../../types';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import ShowMoreButton from '../show-more-btn/show-more-btn';

export default function FilmsList({ films }: Films) {
  const [acitveFilm, setActiveFilm] = useState('');
  let timer: NodeJS.Timeout;
  const countFilmsShown = useAppSelector((state) => state.countFilmsShown) as number;

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
    <>
      <div className="catalog__films-list">
        {
          films
            .slice(0, countFilmsShown > films.length ? films.length : countFilmsShown)
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
      </div>
      {countFilmsShown < films.length && <ShowMoreButton />}
    </>
  );
}

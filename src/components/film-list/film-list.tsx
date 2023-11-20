import { useAppSelector } from '../../store/hooks';
import { FilmInListType } from '../../types';
import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import ShowMoreButton from '../show-more-btn/show-more-btn';

export default function FilmsList() {
  const [acitveFilm, setActiveFilm] = useState('');
  let timer: NodeJS.Timeout;

  const films = useAppSelector((state) => state.shownFilms) as FilmInListType[];
  const countFilmsShown = useAppSelector((state) => state.countShownFilms) as number;

  const handlerMouseOver = (film: FilmInListType) => {
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
            .map((film: FilmInListType) => (
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

import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import ShowMoreButton from '../show-more-button/show-more-button';
import { FilmInListType } from '../../schemas/films';
import { COUNT_FILMS_SHOWN } from '../../const';

function FilmsList({ films }: { films: FilmInListType[] }) {
  const [acitveFilm, setActiveFilm] = useState<string | null>(null);
  const [countFilmsShown, setCountFilmsShown] = useState(COUNT_FILMS_SHOWN);

  let timer: NodeJS.Timeout;

  const handleShowMoreClick = () => {
    setCountFilmsShown((prev) => prev + 8);
  };

  const handleFilmMouseOver = (film: FilmInListType) => {
    timer = setTimeout(() => {
      setActiveFilm(film.id);
    }, 1000);
  };

  const handleFilmMouseOut = () => {
    clearTimeout(timer);
    setActiveFilm(null);
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
                onMouseOver={handleFilmMouseOver}
                onMouseOut={handleFilmMouseOut}
              />
            ))
        }
      </div>
      {countFilmsShown < films.length && <ShowMoreButton onClick={handleShowMoreClick} />}
    </>
  );
}

export default FilmsList;

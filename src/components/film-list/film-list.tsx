import FilmCard from '../film-card/film-card';
import { useState } from 'react';
import ShowMoreButton from '../show-more-btn/show-more-btn';
import { FilmInListType } from '../../schemas/films';

function FilmsList({ films }: { films: FilmInListType[] }) {
  const [acitveFilm, setActiveFilm] = useState('');
  let timer: NodeJS.Timeout;
  const [countFilmsShown, setCountFilmsShown] = useState(8);

  const handlerShowMore = () => {
    setCountFilmsShown((prev) => prev + 8);
  };

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
      {countFilmsShown < films.length && <ShowMoreButton OnClick={handlerShowMore} />}
    </>
  );
}

export default FilmsList;

import { FilmInListType } from '../schemas/films';
import { Genre } from '../types';

function findGenres(films: FilmInListType[]): Genre[] {
  const genres = new Set<Genre>(['All genres']);
  films.forEach((film: FilmInListType) => genres.add(film.genre));
  return Array.from(genres).slice(0, 9);
}

export default findGenres;

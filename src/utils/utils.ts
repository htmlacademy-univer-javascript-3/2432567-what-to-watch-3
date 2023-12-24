import dayjs from 'dayjs';
import { FilmInListType } from '../schemas/films';
import { Genre } from '../types';
import { COUNT_MAX_GENRES } from '../const';

const humanizeFormate = (date: string) => dayjs(date).format('MMMM DD, YYYY');

const durationFormate = (runTime: number) => {
  const hour = Math.floor(runTime / 60);
  const minute = runTime - hour * 60;
  return `${hour}h ${minute}m`;
};

function findGenres(films: FilmInListType[]): Genre[] {
  const genres = new Set<Genre>(['All genres']);
  films.forEach((film: FilmInListType) => genres.add(film.genre));
  return Array.from(genres).slice(0, COUNT_MAX_GENRES);
}

const getLevel = (rating: number): string => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

const getRating = (rating: number) => rating.toFixed(1);

const getRemainTime = (timeLeft: number) => {
  const hours = Math.floor(timeLeft / 60 / 60);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);
  if (hours) {
    return `-${hours}:${minutes}:${seconds}`;
  }
  return `-${minutes}:${seconds}`;
};


export { humanizeFormate, durationFormate, findGenres, getLevel, getRemainTime, getRating };

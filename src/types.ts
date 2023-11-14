import store from './store';

type FilmInList = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

type Film = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

type FilmPromo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

type Genre = string;

type Review = {
  username: string;
  text: string;
  ratingScore: string;
  date: string;
}

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export type { Film, FilmInList, FilmPromo, Review, AppDispatch, State, Genre };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

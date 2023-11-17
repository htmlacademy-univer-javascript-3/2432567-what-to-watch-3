import store from './store';

type FilmInListType = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

type FilmType = {
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

type FilmPromoType = {
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
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export type { FilmType, FilmInListType, FilmPromoType, Review, AppDispatch, State, Genre };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

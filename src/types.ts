import { store } from './store';

type Film = {
  id: string;
  name: string;
  poster: string;
  linkVideo: string;
  bg?: string;
  genre?: string;
  released?: string;
  ratingScore?: string;
  ratingLevel?: string;
  ratingCount?: string;
  director?: string;
  runTime?: string;
  description?: string[];
  starring?: string[];
}

type Films = { films: ReadonlyArray<Film> }

type Review = {
  username: string;
  text: string;
  ratingScore: string;
  date: string;
}

type Reviews = { reviews: ReadonlyArray<Review> }

type AppDispatch = typeof store.dispatch;
type State = ReturnType<typeof store.getState>;

export type { Film, Films, Review, Reviews, AppDispatch, State };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

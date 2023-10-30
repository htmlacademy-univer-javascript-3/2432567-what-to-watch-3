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


export type { Film, Films, Review, Reviews };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

type Film = {
  id: string;
  name: string;
  poster: string;
  bg?: string;
  genre?: string;
  released?: string;
  linkVideo: string;
}

type Films = { films: ReadonlyArray<Film> }

export type { Film, Films };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

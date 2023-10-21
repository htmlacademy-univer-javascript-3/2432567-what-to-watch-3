import { AuthorizationStatus } from './const';


type Film = {
  id: string;
  name: string;
  posterImg: string;
  bgImg?: string;
  genre?: string;
  released?: string;
  videoLink: string;
}

type Films = { films: ReadonlyArray<Film> }

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export type { Film, Films, PrivateRouteProps };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

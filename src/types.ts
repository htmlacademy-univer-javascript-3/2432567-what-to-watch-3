import { AuthorizationStatus } from './const';


type Film = {
  name: string;
  pathImg: string;
  genre?: string;
  date?: string;
}

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export type { Film, PrivateRouteProps };

// ВОПРОС: Как и где хранить общие типы для разный файлов? Как прокидывать типы в компоненты?

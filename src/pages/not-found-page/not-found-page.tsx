import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>404. Страница не найдена</h1>
      <Link to={AppRoute.Main} data-testid='link-main-page'>Главная страница</Link >
    </>
  );
}

export default NotFoundScreen;

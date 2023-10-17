import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>Главная страница</Link >
    </>
  );
}

export default NotFoundScreen;

import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(AppRoute.Main);
  };

  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <p className="error__text">Страница не найдена</p>
      <button
        onClick={handleButtonClick}
        className="replay replay--error"
        type="button"
        data-testid='link-main-page'
      >
        Вернуться на главную страницу
      </button>
    </>
  );
}

export default NotFoundScreen;

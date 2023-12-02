import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppRoute } from '../../const';
import { fetchLogout } from '../../store/api-action';
import { User } from '../../schemas/login';

function AuthorizationUserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user) as User;
  const navigate = useNavigate();

  const handlerOnClick = () => {
    dispatch(fetchLogout());
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={user.avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item">
        <button
          className="user-block__link"
          onClick={handlerOnClick}
        >
          Sign out
        </button>
      </li>
    </ul>
  );
}

export default AuthorizationUserBlock;

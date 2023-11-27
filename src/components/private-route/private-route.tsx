import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { getUser } from '../../store/user/selectors';

function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const authorizationStatus = useAppSelector(getUser) as boolean;

  return (
    authorizationStatus
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;

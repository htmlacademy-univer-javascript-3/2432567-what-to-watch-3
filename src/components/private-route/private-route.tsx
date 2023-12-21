import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';

function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;

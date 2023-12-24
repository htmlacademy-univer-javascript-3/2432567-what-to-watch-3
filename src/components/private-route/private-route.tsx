import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import Spinner from '../spinner/spinner';

function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;

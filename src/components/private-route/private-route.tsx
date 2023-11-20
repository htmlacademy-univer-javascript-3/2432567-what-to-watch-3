import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../store/hooks';

function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus) as boolean;

  return (
    authorizationStatus
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;

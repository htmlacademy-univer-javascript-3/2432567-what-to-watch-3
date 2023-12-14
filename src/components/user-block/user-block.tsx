import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import AuthorizationUserBlock from './authorization-user-block';
import UnauthorizationUserBlock from './unauthorization-user-block';

function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus) as AuthorizationStatus;
  return (authorizationStatus !== AuthorizationStatus.Unknown) &&
    authorizationStatus === AuthorizationStatus.Auth ? <AuthorizationUserBlock /> : <UnauthorizationUserBlock />;
}

export default UserBlock;

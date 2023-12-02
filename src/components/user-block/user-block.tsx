import { useAppSelector } from '../../store/hooks';
import { getAuthorizationStatus } from '../../store/user/selectors';
import AuthorizationUserBlock from './authorization-user-block';
import UnauthorizationUserBlock from './unauthorization-user-block';

function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus) as boolean;
  return authorizationStatus ? <AuthorizationUserBlock /> : <UnauthorizationUserBlock />;
}

export default UserBlock;

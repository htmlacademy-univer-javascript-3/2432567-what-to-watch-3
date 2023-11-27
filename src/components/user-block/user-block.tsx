import { useAppSelector } from '../../store/hooks';
import { getUser } from '../../store/user/selectors';
import AuthorizationUserBlock from '../authorization-user-block/authorization-user-block';
import UnauthorizationUserBlock from '../unauthorization-user-block/unauthorization-user-block';

function UserBlock() {
  const authorizationStatus = useAppSelector(getUser) as boolean;
  return authorizationStatus ? <AuthorizationUserBlock /> : <UnauthorizationUserBlock />;
}

export default UserBlock;

import { useAppSelector } from '../../store/hooks';
import AuthorizationUserBlock from '../authorization-user-block/authorization-user-block';
import UnauthorizationUserBlock from '../unauthorization-user-block/unauthorization-user-block';

function UserBlock() {
  const authorizationStatus = useAppSelector((state) => state.user) as boolean;
  return authorizationStatus ? <AuthorizationUserBlock /> : <UnauthorizationUserBlock />;
}

export default UserBlock;

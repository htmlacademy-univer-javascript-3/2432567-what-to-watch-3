import { AuthorizationStatus } from '../../const';
import { User } from '../../schemas/login';

type initialStateProps = {
  user: User | null;
  authorizationStatus: AuthorizationStatus;
  error: boolean;
}

export type { initialStateProps };

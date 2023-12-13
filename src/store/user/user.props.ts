import { User } from '../../schemas/login';

type initialStateProps = {
  user: User | null;
  error: boolean;
}

export type { initialStateProps };

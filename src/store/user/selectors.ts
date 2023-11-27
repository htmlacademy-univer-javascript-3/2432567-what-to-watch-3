import { NameSpace } from '../../const.ts';
import { User } from '../../schemas/login.ts';
import { State } from '../../types.ts';

const getUser = (state: Pick<State, NameSpace.User>): User | null => state[NameSpace.User].user;

export { getUser };

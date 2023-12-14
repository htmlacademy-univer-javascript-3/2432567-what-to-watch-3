import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { User } from '../../schemas/login.ts';
import { State } from '../../types.ts';

const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUser = (state: Pick<State, NameSpace.User>): User | null => state[NameSpace.User].user;
const getErrorUser = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].error;

export { getAuthorizationStatus, getUser, getErrorUser };

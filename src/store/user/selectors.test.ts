import { AuthorizationStatus, NameSpace } from '../../const';
import { makeFakeUser } from '../../mocks/mock';
import { getAuthorizationStatus, getErrorUser, getUser } from './selectors';

describe('user selectors', () => {
  const state = {
    [NameSpace.User]: {
      user: makeFakeUser(),
      authorizationStatus: AuthorizationStatus.Auth,
      error: false,
    }
  };

  it('getAuthorizationStatus', () => {
    const status = AuthorizationStatus.Auth;

    const result = getAuthorizationStatus(state);

    expect(result).toBe(status);
  });

  it('getUser', () => {
    const { user } = state[NameSpace.User];

    const result = getUser(state);

    expect(result).toBe(user);
  });

  it('getErrorUser', () => {
    const { error } = state[NameSpace.User];

    const result = getErrorUser(state);

    expect(result).toBe(error);
  });
});

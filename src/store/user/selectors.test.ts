import { NameSpace } from '../../const';
import { makeFakeUser } from '../../mocks/mock';
import { getAuthorizationStatus, getErrorUser, getUser } from './selectors';

describe('user selectors', () => {
  const state = {
    [NameSpace.User]: {
      user: makeFakeUser(),
      error: false,
    }
  };

  it('getAuthorizationStatus', () => {
    const { user } = state[NameSpace.User];
    const status = Boolean(user);

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

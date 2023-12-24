import { AuthorizationStatus } from '../../const';
import { makeFakeUser } from '../../mocks/mock';
import { fetchAuthorizationStatus, login, logout } from '../api-action/api-action';
import { userReducer } from './user';
import { initialStateProps } from './user.props';

describe('user slice', () => {
  const initialState: initialStateProps = {
    user: null,
    authorizationStatus: AuthorizationStatus.Unknown,
    error: false,
  };

  describe('initial state', () => {
    it('empty action', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = userReducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('empty action and undefined state', () => {
      const expectedState = { ...initialState };

      const emptyAction = { type: '' };

      const result = userReducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchAuthorizationStatus', () => {
    it('fetchAuthorizationStatus.fulfilled', () => {
      const user = makeFakeUser();
      const expectedState = { ...initialState, user, authorizationStatus: AuthorizationStatus.Auth };

      const result = userReducer(initialState, fetchAuthorizationStatus.fulfilled(user, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('login', () => {
    it('login.pending', () => {
      const expectedState = { ...initialState };

      const result = userReducer(initialState, login.pending);

      expect(result).toEqual(expectedState);
    });

    it('login.rejected', () => {
      const expectedState = { ...initialState, error: true };

      const result = userReducer(initialState, login.rejected);

      expect(result).toEqual(expectedState);
    });

    it('login.fulfilled', () => {
      const user = makeFakeUser();
      const expectedState = { ...initialState, user, authorizationStatus: AuthorizationStatus.Auth };

      const result = userReducer(initialState, login.fulfilled(user, '', { email: '', password: '' }));

      expect(result).toEqual(expectedState);
    });
  });

  describe('logout', () => {
    it('logout.fulfilled', () => {
      const user = makeFakeUser();
      const expectedState = { ...initialState, authorizationStatus: AuthorizationStatus.NoAuth };

      const result = userReducer({ ...initialState, user }, logout.fulfilled);

      expect(result).toEqual(expectedState);
    });
  });
});

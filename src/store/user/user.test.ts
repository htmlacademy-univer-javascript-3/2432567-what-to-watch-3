import { makeFakeUser } from '../../mocks/mock';
import { fetchAuthorizationStatus, fetchLogin, fetchLogout } from '../api-action/api-action';
import { userReducer } from './user';
import { initialStateProps } from './user.props';

describe('user slice', () => {
  const initialState: initialStateProps = {
    user: null,
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
      const expectedState = { ...initialState, user };

      const result = userReducer(initialState, fetchAuthorizationStatus.fulfilled(user, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('login', () => {
    it('fetchLogin.pending', () => {
      const expectedState = { ...initialState };

      const result = userReducer(initialState, fetchLogin.pending);

      expect(result).toEqual(expectedState);
    });

    it('fetchLogin.rejected', () => {
      const expectedState = { ...initialState, error: true };

      const result = userReducer(initialState, fetchLogin.rejected);

      expect(result).toEqual(expectedState);
    });

    it('fetchLogin.fulfilled', () => {
      const user = makeFakeUser();
      const expectedState = { ...initialState, user };

      const result = userReducer(initialState, fetchLogin.fulfilled(user, '', { email: '', password: '' }));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchLogout', () => {
    it('fetchLogout.fulfilled', () => {
      const user = makeFakeUser();
      const expectedState = { ...initialState };

      const result = userReducer({ ...initialState, user }, fetchLogout.fulfilled);

      expect(result).toEqual(expectedState);
    });
  });
});

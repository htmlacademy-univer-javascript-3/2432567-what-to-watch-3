import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { fetchAuthorizationStatus, login, logout } from '../api-action/api-action.ts';
import { dropToken, setToken } from '../../services/token.ts';
import { User } from '../../schemas/login.ts';
import { initialStateProps } from './user.props.ts';

const initialState: initialStateProps = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: false,
};

const pending = (state: initialStateProps) => {
  state.error = false;
};

const rejected = (state: initialStateProps) => {
  state.error = true;
};

const { reducer: userReducer, actions: userActions } = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthorizationStatus.rejected, (state: initialStateProps) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchAuthorizationStatus.fulfilled, (state: initialStateProps, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.pending, pending)
      .addCase(login.rejected, rejected)
      .addCase(login.fulfilled, (state: initialStateProps, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        setToken(action.payload.token);
      })
      .addCase(logout.fulfilled, (state: initialStateProps) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        dropToken();
      });
  },
});

export { userReducer, userActions };

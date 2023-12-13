import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { fetchAuthorizationStatus, fetchLogin, fetchLogout } from '../api-action/api-action.ts';
import { dropToken, setToken } from '../../services/token.ts';
import { User } from '../../schemas/login.ts';
import { initialStateProps } from './user.props.ts';

const initialState: initialStateProps = {
  user: null,
  error: false,
};

const pending = (state: initialStateProps) => {
  state.error = false;
};

const rejected = (state: initialStateProps) => {
  state.error = true;
};

const login = (state: initialStateProps, action: PayloadAction<User>) => {
  state.user = action.payload;
  setToken(action.payload.token);
};

const logout = (state: initialStateProps) => {
  state.user = null;
  dropToken();
};

const { reducer: userReducer, actions: userActions } = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthorizationStatus.fulfilled, login)
      .addCase(fetchLogin.pending, pending)
      .addCase(fetchLogin.rejected, rejected)
      .addCase(fetchLogin.fulfilled, login)
      .addCase(fetchLogout.fulfilled, logout);
  },
});

export { userReducer, userActions };

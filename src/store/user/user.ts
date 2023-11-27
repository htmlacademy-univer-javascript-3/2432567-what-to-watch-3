import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const.ts';
import { fetchAuthorizationStatus, fetchLogin, fetchLogout } from '../api-action.ts';
import { DataAuthorization, User } from '../../schemas/login.ts';
import { dropToken, setToken } from '../../services/token.ts';

type initialStateProps = {
  user: User | null;
}

const initialState: initialStateProps = {
  user: null,
};

const logout = (state: initialStateProps) => {
  state.user = null;
  dropToken();
};

const login = (state: initialStateProps, action: PayloadAction<DataAuthorization>) => {
  state.user = action.payload;
  setToken(action.payload.token);
};

const { reducer: userReducer, actions: userActions } = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthorizationStatus.fulfilled, login)
      .addCase(fetchLogin.fulfilled, login)
      .addCase(fetchLogout.fulfilled, logout);
  },
});

export { userReducer, userActions };

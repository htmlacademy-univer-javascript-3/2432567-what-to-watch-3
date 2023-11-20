import { Token } from '../types';

const TOKEN_NAME = 'wtw-token';

const getToken = (): Token => localStorage.getItem(TOKEN_NAME) ?? '';

const setToken = (token: Token): void => {
  localStorage.setItem(TOKEN_NAME, token);
};

const dropToken = (): void => {
  localStorage.removeItem(TOKEN_NAME);
};

export { getToken, setToken, dropToken };

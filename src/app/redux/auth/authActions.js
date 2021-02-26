import { LOGIN, LOGOUT } from './authTypes';

export const login = (token) => ({
  type: LOGIN,
  payload: token
});

export const logout = () => ({
  type: LOGOUT
});

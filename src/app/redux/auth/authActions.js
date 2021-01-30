import { LOGIN, LOGOUT } from './authTypes';

const login = () => ({
  type: LOGIN
});

const logout = () => ({
  type: LOGOUT
});

export { login, logout };

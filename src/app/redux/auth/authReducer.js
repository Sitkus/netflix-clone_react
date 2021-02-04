import { LOGIN, LOGOUT } from './authTypes';

const initialState = {
  isLoggedIn: false
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      localStorage.setItem('token', payload.token);

      return { ...state, isLoggedIn: true };
    }
    case LOGOUT: {
      localStorage.removeItem('token');

      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
}

export default authReducer;

import { LOGIN, LOGOUT } from './types';

const initialState = {
  isLoggedIn: !!localStorage.getItem('token') || false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem('token', action.payload);

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

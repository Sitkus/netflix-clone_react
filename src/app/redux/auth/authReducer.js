import { LOGIN, LOGOUT } from './authTypes';

const initialState = {
  isLoggedIn: false
};

function authReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case LOGIN: {
      return { ...state, isLoggedIn: true };
    }
    case LOGOUT: {
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
}

export default authReducer;

import { LOGIN, LOGOUT } from './authTypes';

const initialState = {
  isLoggedIn: false
};

function authReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case LOGIN: {
      return { isLoggedIn: true };
    }
    case LOGOUT: {
      return { isLoggedIn: false };
    }
    default:
      return state;
  }
}

export default authReducer;

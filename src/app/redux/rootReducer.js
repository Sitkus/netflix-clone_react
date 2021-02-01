import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import moviesReducer from './movies/moviesReducer';

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer
});

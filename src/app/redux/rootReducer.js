import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import moviesReducer from './movies/reducer';

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});

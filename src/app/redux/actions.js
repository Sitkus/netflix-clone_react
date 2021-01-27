import { TOGGLE_MOVIE } from './actionTypes';

const toggleMovie = id => ({
  type: TOGGLE_MOVIE,
  payload: { id }
});

export { toggleMovie };

import { SET_MOVIES, SET_FAVORITE_MOVIES, SET_NEW_URL, CLEAR_MOVIES_FROM_LS } from './moviesTypes';

const setMovies = () => ({
  type: SET_MOVIES
});

const setFavoriteMovies = () => ({
  type: SET_FAVORITE_MOVIES
});

const setUrl = () => ({
  type: SET_NEW_URL
});

const clearMoviesFromLocalStorage = () => ({
  type: CLEAR_MOVIES_FROM_LS
});

export { setMovies, setFavoriteMovies, setUrl, clearMoviesFromLocalStorage };

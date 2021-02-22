import { createAction } from 'redux-api-middleware';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAILURE,
  SET_MOVIES,
  TOGGLE_FAVORITE,
  SET_FAVORITE_MOVIES,
  CLEAR_MOVIES_FROM_LS
} from './moviesTypes';

const fetchMovies = () =>
  createAction({
    endpoint: `https://academy-video-api.herokuapp.com/content/${
      localStorage.getItem('token') ? 'items' : 'free-items'
    }`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') ?? null
    },
    types: [FETCH_MOVIES, SET_MOVIES, FETCH_MOVIES_FAILURE]
  });

const setMovies = () => ({
  type: SET_MOVIES
});

const toggleFavoriteMovie = () => ({
  type: TOGGLE_FAVORITE
});

const setFavoriteMovies = () => ({
  type: SET_FAVORITE_MOVIES
});

const clearMoviesFromLocalStorage = () => ({
  type: CLEAR_MOVIES_FROM_LS
});

export { fetchMovies, setMovies, toggleFavoriteMovie, setFavoriteMovies, clearMoviesFromLocalStorage };

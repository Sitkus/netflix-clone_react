import { createAction } from 'redux-api-middleware';
import { FETCH_MOVIES, FETCH_MOVIES_FAILURE, SET_MOVIES, TOGGLE_FAVORITE, SET_FAVORITE_MOVIES } from './moviesTypes';

export const fetchMovies = () =>
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

export const setMovies = (updatedMovies) => ({
  type: SET_MOVIES,
  payload: updatedMovies
});

export const toggleFavoriteMovie = (clickedMovie) => ({
  type: TOGGLE_FAVORITE,
  payload: clickedMovie
});

export const setFavoriteMovies = (updatedFavoriteMovies) => ({
  type: SET_FAVORITE_MOVIES,
  payload: updatedFavoriteMovies
});

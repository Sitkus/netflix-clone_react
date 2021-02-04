import { SET_MOVIES, SET_FAVORITE_MOVIES, SET_NEW_URL, CLEAR_MOVIES_FROM_LS } from './moviesTypes';

const initialState = {
  movies: [],
  favoriteMovies: [],
  fetchUrl: 'https://academy-video-api.herokuapp.com/content/free-items'
};

function moviesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES: {
      localStorage.setItem('movies', JSON.stringify(payload.newMovies));

      return { ...state, movies: payload.newMovies };
    }
    case SET_FAVORITE_MOVIES: {
      localStorage.setItem('favorite-movies', JSON.stringify(payload.newFavoriteMovies));

      return { ...state, favoriteMovies: payload.newFavoriteMovies };
    }
    case SET_NEW_URL: {
      return { ...state, fetchUrl: payload.newUrl };
    }
    case CLEAR_MOVIES_FROM_LS: {
      localStorage.removeItem('movies');

      return state;
    }
    default:
      return state;
  }
}

export default moviesReducer;

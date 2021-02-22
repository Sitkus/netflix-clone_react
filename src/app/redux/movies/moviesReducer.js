import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAILURE,
  SET_MOVIES,
  TOGGLE_FAVORITE,
  SET_FAVORITE_MOVIES,
  CLEAR_MOVIES_FROM_LS
} from './moviesTypes';

const initialState = {
  allMovies: [],
  favoriteMovies: [],
  isLoading: false
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return { ...state, isLoading: true };
    }

    case SET_MOVIES: {
      if (state.favoriteMovies.length > 0) {
        action.payload = action.payload.map((movie) => {
          const favoriteMovieExist = state.favoriteMovies.indexOf(movie.id);

          if (favoriteMovieExist > -1) {
            movie.favorite = true;
          } else {
            movie.favorite = false;
          }

          return movie;
        });
      }

      localStorage.setItem('movies', JSON.stringify(action.payload));

      return { ...state, allMovies: action.payload, isLoading: false };
    }

    case FETCH_MOVIES_FAILURE: {
      console.log('Some kind of error happened at FETCH_MOVIES');

      return state;
    }

    case TOGGLE_FAVORITE: {
      const favoriteMovieExist = state.favoriteMovies.indexOf(action.payload.id);
      const updatedFavoriteMovies = state.favoriteMovies;

      action.payload.favorite = !action.payload.favorite;

      if (favoriteMovieExist > -1) {
        updatedFavoriteMovies.splice(favoriteMovieExist, 1);
      } else {
        updatedFavoriteMovies.push(action.payload.id);
      }

      const updatedMovies = state.allMovies.map((currentMovie) => {
        if (currentMovie.id === action.payload.id) {
          currentMovie = action.payload;
        }

        return currentMovie;
      });

      return { ...state, allMovies: updatedMovies, favoriteMovies: updatedFavoriteMovies };
    }

    case SET_FAVORITE_MOVIES: {
      localStorage.setItem('favorite-movies', JSON.stringify(action.payload));

      return { ...state, favoriteMovies: action.payload };
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

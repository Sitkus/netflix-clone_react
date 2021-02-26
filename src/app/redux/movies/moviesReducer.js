import { FETCH_MOVIES, FETCH_MOVIES_FAILURE, SET_MOVIES, TOGGLE_FAVORITE, SET_FAVORITE_MOVIES } from './moviesTypes';

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
      const favoriteMovies = state.favoriteMovies;
      const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));

      action.payload.favorite = !action.payload.favorite;

      if (favoriteMovieExist > -1) {
        favoriteMovies.splice(favoriteMovieExist, 1);
      } else {
        favoriteMovies.push(action.payload.id);
      }

      const movies = moviesFromLocalStorage.map((movie) => {
        if (movie.id === action.payload.id) {
          movie = action.payload;
        }

        return movie;
      });

      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('favorite-movies', JSON.stringify(favoriteMovies));

      return { ...state, allMovies: movies, favoriteMovies };
    }

    case SET_FAVORITE_MOVIES: {
      localStorage.setItem('favorite-movies', JSON.stringify(action.payload));

      return { ...state, favoriteMovies: action.payload };
    }

    default:
      return state;
  }
}

export default moviesReducer;

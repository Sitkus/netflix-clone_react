import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_MOVIES,
  TOGGLE_FAVORITE,
  SET_FAVORITE_MOVIES,
  CLEAR_MOVIES_FROM_LS
} from './moviesTypes';

const initialState = {
  allMovies: [],
  favoriteMovies: []
};

function moviesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES: {
      console.log(action);
      return state;
    }

    case FETCH_MOVIES_SUCCESS: {
      console.log(action);
      return state;
    }

    case FETCH_MOVIES_FAILURE: {
      console.log(action);
      return state;
    }

    case SET_MOVIES: {
      let { newMovies } = payload;

      if (state.favoriteMovies.length > 0) {
        newMovies = newMovies.map((movie) => {
          const favoriteMovieExist = state.favoriteMovies.indexOf(movie.id);

          if (favoriteMovieExist > -1) {
            movie.favorite = true;
          } else {
            movie.favorite = false;
          }

          return movie;
        });
      }

      localStorage.setItem('movies', JSON.stringify(newMovies));

      return { ...state, allMovies: newMovies };
    }

    case TOGGLE_FAVORITE: {
      const { clickedMovie } = payload;
      const favoriteMovieExist = state.favoriteMovies.indexOf(clickedMovie.id);
      const updatedFavoriteMovies = state.favoriteMovies;

      clickedMovie.favorite = !clickedMovie.favorite;

      if (favoriteMovieExist > -1) {
        updatedFavoriteMovies.splice(favoriteMovieExist, 1);
      } else {
        updatedFavoriteMovies.push(clickedMovie.id);
      }

      const updatedMovies = state.allMovies.map((currentMovie) => {
        if (currentMovie.id === clickedMovie.id) {
          currentMovie = clickedMovie;
        }

        return currentMovie;
      });

      return { ...state, allMovies: updatedMovies, favoriteMovies: updatedFavoriteMovies };
    }

    case SET_FAVORITE_MOVIES: {
      const { newFavoriteMovies } = payload;
      localStorage.setItem('favorite-movies', JSON.stringify(newFavoriteMovies));

      return { ...state, favoriteMovies: newFavoriteMovies };
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

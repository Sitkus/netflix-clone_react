import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './pages.style';

import { Hero } from '../layout';
import { MovieBox } from '../common';
import { Button } from '../helpers';

function Home() {
  let history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const movies = useSelector((state) => state.movies.movies);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  const fetchMovies = useCallback(
    async (urlToFetchFrom) => {
      try {
        const response = await fetch(urlToFetchFrom, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token') ?? null
          }
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Something went wrong...');
        }

        dispatch({
          type: 'SET_MOVIES',
          payload: {
            newMovies: data
          }
        });
      } catch (e) {
        console.log(e.message);
      } finally {
        console.log('Finally');
      }
    },
    [dispatch]
  );

  // Stuck here
  // const checkForAnyFavoriteMovies = () => {
  //   const favoriteMoviesFromLocalStorage = JSON.parse(localStorage.getItem('favorite-movies'));
  //   const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));

  //   if (favoriteMoviesFromLocalStorage && moviesFromLocalStorage) {
  //     const updatedMovies = moviesFromLocalStorage.map((currentMovie) => {
  //       const movieExistsInCurrentMovie = favoriteMoviesFromLocalStorage.indexOf(currentMovie.id);

  //       if (movieExistsInCurrentMovie > -1) {
  //         currentMovie.favorite = true;
  //       }

  //       return currentMovie;
  //     });

  //     setMovies(updatedMovies);
  //     setFavoriteMovies(favoriteMoviesFromLocalStorage);
  //   }
  // };

  const toggleMovieFavorite = (favoredMovie) => {
    favoredMovie.favorite = !favoredMovie.favorite;

    const favoriteMovieExist = favoriteMovies.indexOf(favoredMovie.id);

    if (favoriteMovieExist > -1) {
      favoriteMovies.splice(favoriteMovieExist, 1);
    } else {
      favoriteMovies.push(favoredMovie.id);
    }

    const updatedMovies = movies.map((currentMovie) => {
      if (currentMovie.id === favoredMovie.id) {
        currentMovie = favoredMovie;
      }

      return currentMovie;
    });

    dispatch({
      type: 'SET_MOVIES',
      payload: {
        newMovies: updatedMovies
      }
    });

    dispatch({
      type: 'SET_FAVORITE_MOVIES',
      payload: {
        newFavoriteMovies: favoriteMovies
      }
    });
  };

  const openChosenMovie = (e, movieId) => {
    if (e.target.type !== 'button') {
      history.push(`/movie/${movieId}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorageMovies) {
      dispatch({
        type: 'SET_MOVIES',
        payload: {
          newMovies: localStorageMovies
        }
      });
    } else if (token) {
      fetchMovies('https://academy-video-api.herokuapp.com/content/items');
    } else {
      fetchMovies('https://academy-video-api.herokuapp.com/content/free-items');
    }
  }, [fetchMovies, isLoggedIn, dispatch]);

  return (
    <main className={classes.main}>
      {!isLoggedIn && <Hero />}

      <ul className={classes.movies}>
        {movies ? (
          movies.map((movie) => (
            <MovieBox
              clickOnMovie={(e) => openChosenMovie(e, movie.id)}
              favorite={movie.favorite || false}
              toggleFavorite={() => toggleMovieFavorite(movie)}
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <Button className={classes.button}>Get More Content</Button>
    </main>
  );
}

export default Home;

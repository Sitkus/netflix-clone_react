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
  const movies = useSelector((state) => state.movies.allMovies);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  const fetchMovies = useCallback(
    async (url) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token') ?? null
          }
        });
        const data = await response.json();

        if (!response.ok) {
          dispatch({ type: 'LOGOUT' });

          dispatch({ type: 'CLEAR_MOVIES_FROM_LS' });
        } else {
          dispatch({
            type: 'SET_MOVIES',
            payload: {
              newMovies: data
            }
          });
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    [dispatch]
  );

  const toggleMovieFavorite = (clickedMovie) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: {
        clickedMovie
      }
    });

    dispatch({
      type: 'SET_MOVIES',
      payload: {
        newMovies: movies
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
    const localStorageFavoriteMovies = JSON.parse(localStorage.getItem('favorite-movies'));

    if (localStorageFavoriteMovies) {
      dispatch({
        type: 'SET_FAVORITE_MOVIES',
        payload: {
          newFavoriteMovies: localStorageFavoriteMovies
        }
      });
    }

    if (localStorageMovies) {
      dispatch({
        type: 'SET_MOVIES',
        payload: {
          newMovies: localStorageMovies
        }
      });
    } else {
      dispatch({
        type: 'FETCH_MOVIES'
      });
      // fetchMovies('https://academy-video-api.herokuapp.com/content/free-items');
    }

    // if (localStorageMovies) {
    //   dispatch({
    //     type: 'SET_MOVIES',
    //     payload: {
    //       newMovies: localStorageMovies
    //     }
    //   });
    // } else if (token) {
    //   fetchMovies('https://academy-video-api.herokuapp.com/content/items');
    // } else {
    //   fetchMovies('https://academy-video-api.herokuapp.com/content/free-items');
    // }
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

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './pages.style';

import { fetchMovies } from '../../redux/movies/moviesActions';
import { Hero } from '../layout';
import { MovieBox } from '../common';
import { Button } from '../helpers';

function Home() {
  let history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const moviesAreLoading = useSelector((state) => state.movies.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const movies = useSelector((state) => state.movies.allMovies);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  const toggleMovieFavorite = (clickedMovie) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: clickedMovie
    });

    dispatch({
      type: 'SET_MOVIES',
      payload: movies
    });

    dispatch({
      type: 'SET_FAVORITE_MOVIES',
      payload: favoriteMovies
    });
  };

  const openChosenMovie = (e, movieId) => {
    if (e.target.type !== 'button') {
      history.push(`/movie/${movieId}`);
    }
  };

  useEffect(() => {
    const localStorageFavoriteMovies = JSON.parse(localStorage.getItem('favorite-movies'));
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorageFavoriteMovies) {
      dispatch({
        type: 'SET_FAVORITE_MOVIES',
        payload: localStorageFavoriteMovies
      });
    }

    if (localStorageMovies) {
      dispatch({
        type: 'SET_MOVIES',
        payload: localStorageMovies
      });
    } else {
      dispatch(fetchMovies());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <main className={classes.main}>
      {!isLoggedIn && <Hero />}

      <ul className={classes.movies}>
        {!moviesAreLoading ? (
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

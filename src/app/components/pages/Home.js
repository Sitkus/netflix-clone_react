import { useState, useEffect } from 'react';
import useStyles from './pages.style';
import { useSelector } from 'react-redux';

import { Hero } from '../layout';
import { Movie } from '../common';
import { Button } from '../helpers';

function Home() {
  const classes = useStyles();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    const fetchMovies = async (urlToFetchFrom) => {
      const response = await fetch(urlToFetchFrom, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ?? null
        }
      });
      const data = await response.json();

      setMovies(data);
      saveMoviesToLocalStorage(data);
    };

    if (localStorageMovies) {
      setMovies(localStorageMovies);
    } else if (token) {
      fetchMovies('https://academy-video-api.herokuapp.com/content/items');
    } else {
      fetchMovies('https://academy-video-api.herokuapp.com/content/free-items');
    }

    checkForAnyFavoriteMovies();
  }, [isLoggedIn]);

  const checkForAnyFavoriteMovies = () => {
    //
  };

  const toggleMovieFavorite = (favoredMovie) => {
    favoredMovie.favorite = !favoredMovie.favorite;

    const favoriteMovieExist = favoriteMovies.indexOf(favoredMovie.id);

    if (favoriteMovieExist > -1) {
      favoriteMovies.splice(favoriteMovieExist, 1);
    } else {
      favoriteMovies.push(favoredMovie.id);
    }

    setFavoriteMovies(favoriteMovies);

    const updatedMovies = movies.map((currentMovie) => {
      if (currentMovie.id === favoredMovie.id) {
        currentMovie = favoredMovie;
      }

      return currentMovie;
    });

    setMovies(updatedMovies);
    saveFavoriteMoviesToLocalStorage();
    saveMoviesToLocalStorage(updatedMovies);
  };

  const saveFavoriteMoviesToLocalStorage = () => {
    console.log(favoriteMovies);
    localStorage.setItem('favorite-movies', JSON.stringify(favoriteMovies));
  };

  const saveMoviesToLocalStorage = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  return (
    <main className={classes.main}>
      {!isLoggedIn && <Hero />}

      <ul className={classes.movies}>
        {movies ? (
          movies.map((movie) => (
            <Movie
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

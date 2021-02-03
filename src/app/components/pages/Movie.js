import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './pages.style';

import { Button } from '../helpers';
import { WatchMovieModal } from '../common';

function Movie() {
  // const movies = useSelector((state) => state.movies.movies);
  const locationParams = useParams();
  const classes = useStyles();

  const [currentMovie, setCurrentMovie] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getMoviesFromLocalStorage = useCallback(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));

    movies.forEach((movie) => {
      if (locationParams.id === movie.id) {
        setCurrentMovie(movie);
      }
    });
  }, [locationParams.id]);

  const toggleMovieFavorite = (movieFavoriteToggle) => {
    movieFavoriteToggle = !movieFavoriteToggle;

    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));

    const updatedMovies = moviesFromLocalStorage.map((updatingMovie) => {
      if (updatingMovie.id === movieFavoriteToggle.id) {
        updatingMovie = movieFavoriteToggle;
      }

      return updatingMovie;
    });

    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    setCurrentMovie(currentMovie);
  };

  useEffect(() => {
    getMoviesFromLocalStorage();

    const checkForEscKeyPress = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        setModalIsOpen(false);
      }
    };

    document.addEventListener('keydown', checkForEscKeyPress);

    return function cleanup() {
      document.removeEventListener('keydown', checkForEscKeyPress);
    };
  }, [getMoviesFromLocalStorage]);

  return (
    <main className={`${classes.main} ${classes.mainMovie}`}>
      <img className={classes.movieImage} src={currentMovie.image} alt="text" />
      <article className={classes.movieContent}>
        <h2 className={classes.movieTitle}>{currentMovie.title}</h2>
        <p className={classes.movieDescription}>{currentMovie.description}</p>

        <Button className={classes.movieButton} onClick={() => setModalIsOpen(true)}>
          Watch it!
        </Button>

        <Button
          onClick={() => toggleMovieFavorite(currentMovie)}
          className={`${classes.movieButton} ${currentMovie.favorite ? classes.remove : classes.favorite}`}
        >
          {currentMovie.favorite ? 'Remove' : 'Favorite'}
        </Button>
      </article>

      {modalIsOpen ? <WatchMovieModal setModalIsOpen={setModalIsOpen} video={currentMovie.video} /> : null}
    </main>
  );
}

export default Movie;

import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './pages.style';

import movies from '../../redux/movies';
import { Button } from '../helpers';
import { WatchMovieModal } from '../common';

function Movie() {
  const locationParams = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

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

  const toggleFavoriteMovie = (clickedMovie) => {
    dispatch(movies.actions.toggleFavoriteMovie(clickedMovie));

    getMoviesFromLocalStorage();
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
      {Object.keys(currentMovie).length === 0 ? (
        <p className={classes.movieDoesntExist}>Such movie doesn't exist, please try again...</p>
      ) : (
        <>
          <img className={classes.movieImage} src={currentMovie.image} alt={`Poster of ${currentMovie.title} movie`} />
          <article className={classes.movieContent}>
            <h2 className={classes.movieTitle}>{currentMovie.title}</h2>
            <p className={classes.movieDescription}>{currentMovie.description}</p>

            <Button className={classes.movieButton} onClick={() => setModalIsOpen(true)}>
              Watch it!
            </Button>

            <Button
              onClick={() => toggleFavoriteMovie(currentMovie)}
              className={`${classes.movieButton} ${currentMovie.favorite ? classes.remove : classes.favorite}`}
            >
              {currentMovie.favorite ? 'Remove' : 'Favorite'}
            </Button>
          </article>

          {modalIsOpen ? <WatchMovieModal setModalIsOpen={setModalIsOpen} video={currentMovie.video} /> : null}
        </>
      )}
    </main>
  );
}

export default Movie;

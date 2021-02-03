import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './pages.style';

import { Button } from '../helpers';
import { WatchMovieModal } from '../common';

function Movie() {
  const locationParams = useParams();
  const classes = useStyles();

  const [currentMovie, setCurrentMovie] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  }, []);

  const getMoviesFromLocalStorage = () => {
    const movies = JSON.parse(localStorage.getItem('movies'));

    movies.forEach((movie) => {
      if (locationParams.id === movie.id) {
        setCurrentMovie(movie);
      }
    });
  };

  const toggleMovieFavorite = () => {
    console.log('Favorite');
  };

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
          onClick={toggleMovieFavorite}
          className={`${classes.movieButton} ${classes.favoriteButton} ${
            currentMovie.favorite ? classes.remove : classes.favorite
          }`}
        >
          {currentMovie.favorite ? 'Remove' : 'Favorite'}
        </Button>
      </article>

      {modalIsOpen ? <WatchMovieModal setModalIsOpen={setModalIsOpen} video={currentMovie.video} /> : null}
    </main>
  );
}

export default Movie;

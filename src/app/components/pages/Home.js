import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './pages.style';

import movies from '../../redux/movies';
import auth from '../../redux/auth';

import { Hero } from '../layout';
import { MovieBox } from '../common';
import { Button } from '../helpers';

function Home() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);
  const moviesAreLoading = useSelector(movies.selectors.isLoading);
  const allMovies = useSelector(movies.selectors.allMovies);

  const openChosenMovie = (e, movieId) => {
    if (e.target.type !== 'button') {
      history.push(`/movie/${movieId}`);
    }
  };

  return (
    <main className={classes.main}>
      {!isLoggedIn && <Hero />}

      <ul className={classes.movies}>
        {!moviesAreLoading ? (
          allMovies.map((movie) => (
            <MovieBox
              clickOnMovie={(e) => openChosenMovie(e, movie.id)}
              favorite={movie.favorite || false}
              toggleFavorite={() => dispatch(movies.actions.toggleFavoriteMovie(movie))}
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

import { useSelector, useDispatch } from 'react-redux';
import useStyles from './pages.style';

import movies from '../../redux/movies';
import auth from '../../redux/auth';

import { Hero } from '../layout';
import { MovieBox } from '../common';
import { LinkButton } from '../helpers';

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);
  const moviesAreLoading = useSelector(movies.selectors.isLoading);
  const allMovies = useSelector(movies.selectors.allMovies);

  return (
    <main className={classes.main}>
      {!isLoggedIn && <Hero />}

      <ul className={classes.movies}>
        {!moviesAreLoading ? (
          allMovies.map((movie) => (
            <MovieBox
              toggleFavorite={() => dispatch(movies.actions.toggleFavoriteMovie(movie))}
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      {!isLoggedIn && (
        <LinkButton to="/sign-up" className={classes.button}>
          Get More Content
        </LinkButton>
      )}
    </main>
  );
}

export default Home;

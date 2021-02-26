import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import movies from './redux/movies';
import auth from './redux/auth';
import { Header, Footer } from './components/layout';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();

  const checkIfLoggedIn = useCallback(() => {
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken) {
      dispatch(auth.actions.login(localStorageToken));
    } else {
      dispatch(auth.actions.logout());
    }
  }, [dispatch]);

  useEffect(() => {
    checkIfLoggedIn();

    const localStorageFavoriteMovies = JSON.parse(localStorage.getItem('favorite-movies'));
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorageFavoriteMovies) {
      dispatch(movies.actions.setFavoriteMovies(localStorageFavoriteMovies));
    }

    if (localStorageMovies) {
      dispatch(movies.actions.setMovies(localStorageMovies));
    } else {
      dispatch(movies.actions.fetchMovies());
    }
  }, [checkIfLoggedIn, dispatch]);

  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

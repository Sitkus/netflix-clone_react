import { useEffect, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header, Footer } from './components/layout';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();

  const checkIfLoggedIn = useCallback(() => {
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken) {
      dispatch({
        type: 'LOGIN',
        payload: {
          token: localStorageToken
        }
      });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, [dispatch]);

  useEffect(() => {
    checkIfLoggedIn();
  }, [checkIfLoggedIn]);

  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

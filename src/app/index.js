import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Footer } from './components/layout';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    checkIfLoggedIn();
  }, [isLoggedIn]);

  const checkIfLoggedIn = () => {
    const tokenFromLocalStorage = localStorage.getItem('token');

    if (tokenFromLocalStorage) {
      dispatch({ type: 'LOGIN' });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  };

  return (
    <Router>
      <Header />
      <Routes checkIfLoggedIn={checkIfLoggedIn} />
      <Footer />
    </Router>
  );
}

export default App;

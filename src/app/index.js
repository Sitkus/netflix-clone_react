import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer } from './components/layout';
import Routes from './routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkIfLoggedIn();
  }, [isLoggedIn]);

  const checkIfLoggedIn = () => {
    const tokenFromLocalStorage = localStorage.getItem('token');

    if (tokenFromLocalStorage) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes isLoggedIn={isLoggedIn} checkIfLoggedIn={checkIfLoggedIn} />
      <Footer />
    </Router>
  );
}

export default App;

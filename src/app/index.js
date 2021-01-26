import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

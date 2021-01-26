import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from '../components/layout';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Hello world!</h1>
        </Route>
        <Route exact path="/sign-in">
          <h1>Sign in, fella!</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;

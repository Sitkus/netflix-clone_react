import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Home, SignIn, SignUp } from '../components/pages';

function Routes({ checkIfLoggedIn, isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute isLoggedIn={isLoggedIn} exact path="/sign-in">
        <SignIn checkIfLoggedIn={checkIfLoggedIn} />
      </PrivateRoute>
      <PrivateRoute isLoggedIn={isLoggedIn} exact="exact" path="/sign-up">
        <SignUp />
      </PrivateRoute>
    </Switch>
  );
}

export default Routes;

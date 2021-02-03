import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotLoggedIn from './NotLoggedIn';
import { Home, SignIn, SignUp, Movie } from '../components/pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <NotLoggedIn exact path="/sign-in">
        <SignIn />
      </NotLoggedIn>

      <NotLoggedIn exact={true} path="/sign-up">
        <SignUp />
      </NotLoggedIn>

      <PrivateRoute exact={true} path="/movie/:id">
        <Movie />
      </PrivateRoute>

      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;

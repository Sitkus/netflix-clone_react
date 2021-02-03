import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Home, SignIn, SignUp, Movie } from '../components/pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <PublicRoute exact path="/sign-in">
        <SignIn />
      </PublicRoute>

      <PublicRoute exact={true} path="/sign-up">
        <SignUp />
      </PublicRoute>

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

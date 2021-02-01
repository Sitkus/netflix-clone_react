import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Home, SignIn, SignUp } from '../components/pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <PrivateRoute exact path="/sign-in">
        <SignIn />
      </PrivateRoute>

      <PrivateRoute exact="exact" path="/sign-up">
        <SignUp />
      </PrivateRoute>

      <Route path="*">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;

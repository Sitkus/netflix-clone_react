import { Switch, Route } from 'react-router-dom';
import { Home, SignIn } from '../components/pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
}

export default Routes;

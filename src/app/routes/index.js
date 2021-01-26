import { Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../components/pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Routes;

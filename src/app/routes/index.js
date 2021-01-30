import { Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../components/pages';

function Routes({ checkIfLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sign-in">
        <SignIn checkIfLoggedIn={checkIfLoggedIn} />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Routes;

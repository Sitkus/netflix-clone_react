import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Hello world!</h1>
        </Route>
        <Route exact path="/sign-in">
          <h1>Sign in, fella!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;

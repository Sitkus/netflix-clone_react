import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, isLoggedIn, ...properties }) {
  return <Route {...properties}>{isLoggedIn ? <Redirect to="/" /> : children}</Route>;
}

export default PrivateRoute;

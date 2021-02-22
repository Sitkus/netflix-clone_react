import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...properties }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const tokenExists = !!localStorage.getItem('token');

  return <Route {...properties}>{!tokenExists && !isLoggedIn ? <Redirect to="/sign-in" /> : children}</Route>;
}

export default PrivateRoute;

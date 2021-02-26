import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import auth from '../redux/auth';

function PrivateRoute({ children, ...properties }) {
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);
  const tokenExists = !!localStorage.getItem('token');

  return <Route {...properties}>{!tokenExists && !isLoggedIn ? <Redirect to="/sign-in" /> : children}</Route>;
}

export default PrivateRoute;

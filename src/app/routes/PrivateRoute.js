import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...properties }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem('token');

  return <Route {...properties}>{!token && !isLoggedIn ? <Redirect to="/sign-in" /> : children}</Route>;
}

export default PrivateRoute;

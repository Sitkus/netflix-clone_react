import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({ children, ...properties }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem('token');

  return <Route {...properties}>{token && isLoggedIn ? <Redirect to="/" /> : children}</Route>;
}

export default PublicRoute;

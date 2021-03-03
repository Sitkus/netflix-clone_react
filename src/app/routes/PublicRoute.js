import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import auth from '../redux/auth';

function PublicRoute({ children, ...properties }) {
  const location = useLocation();
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  return (
    <Route {...properties}>
      {isLoggedIn ? <Redirect to={{ pathname: '/', state: { referrer: location } }} /> : children}
    </Route>
  );
}

export default PublicRoute;

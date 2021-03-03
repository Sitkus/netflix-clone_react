import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import auth from '../redux/auth';

function PrivateRoute({ children, ...properties }) {
  const location = useLocation();
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  return (
    <Route {...properties}>
      {!isLoggedIn ? <Redirect to={{ pathname: '/sign-in', state: { referrer: location } }} /> : children}
    </Route>
  );
}

export default PrivateRoute;

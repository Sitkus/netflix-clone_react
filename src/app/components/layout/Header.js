import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import movies from '../../redux/movies';
import auth from '../../redux/auth';
import useStyles from './Header.style';
import logo from '../../../assets/images/logo.svg';
import { Button } from '../helpers';

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const isLoggedIn = useSelector(auth.selectors.isLoggedIn);

  const logout = () => {
    dispatch(auth.actions.logout());
    dispatch(movies.actions.fetchMovies());
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.logoLink}>
          <img className={classes.logoImage} src={logo} alt="Logo made from an F letter" />
        </Link>
        {location.pathname === '/sign-in' ? null : !isLoggedIn ? (
          <Link to="/sign-in">
            <Button>Sign in</Button>
          </Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;

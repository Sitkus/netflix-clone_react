import { Link, useHistory } from 'react-router-dom';
import useStyles from './Header.style';
import logo from '../../../assets/images/logo.svg';

import { Button } from '../helpers';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const classes = useStyles();
  let history = useHistory();

  const redirectToSignIn = () => {
    history.push('/sign-in');
  };

  const logout = () => {
    deleteTokenFromLocalStorage();

    setIsLoggedIn(false);
  };

  const deleteTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.logoLink}>
          <img className={classes.logoImage} src={logo} alt="Logo made from an F letter" />
        </Link>
        {!isLoggedIn ? <Button onClick={redirectToSignIn}>Sign in</Button> : <Button onClick={logout}>Logout</Button>}
      </nav>
    </header>
  );
}

export default Header;

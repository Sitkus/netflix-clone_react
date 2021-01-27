import { Link, useHistory } from 'react-router-dom';
import useStyles from './Header.style';
import logo from '../../../assets/images/logo.svg';

function Header() {
  const classes = useStyles();
  let history = useHistory();

  const redirectToSignIn = () => {
    history.push('/sign-in');
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.logoLink}>
          <img className={classes.logoImage} src={logo} alt="Logo made from an F letter" />
        </Link>
        <button className={classes.signInButton} onClick={redirectToSignIn}>
          Sign in
        </button>
      </nav>
    </header>
  );
}

export default Header;

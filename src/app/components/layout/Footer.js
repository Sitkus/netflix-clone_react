import useStyles from './layout.style';

function Header() {
  const classes = useStyles();
  const date = new Date();

  return (
    <footer className={classes.test}>
      <p>We care about your entertainment. Copyright © 2019 - {date.getFullYear()} netflix-clone.com</p>
      <ul>
        <li>
          <img src="card" alt="Visa logo" />
        </li>
        <li>
          <img src="card" alt="Mastercard logo" />
        </li>
        <li>
          <img src="card" alt="Amex logo" />
        </li>
        <li>
          <img src="card" alt="Discover logo" />
        </li>
      </ul>
    </footer>
  );
}

export default Header;

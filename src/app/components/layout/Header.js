import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="logo" alt="Logo made from an F letter" />
        </Link>
        <button>Sign in</button>
      </nav>
    </header>
  );
}

export default Header;

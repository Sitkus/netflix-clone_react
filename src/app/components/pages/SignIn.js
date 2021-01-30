import { LocalGasStation } from '@material-ui/icons';
import { useState } from 'react';
import useStyles from './pages.style';

function SignIn() {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkIfInputsAreNotEmpty = e => {
    removeError();

    if (username && password) {
      const userData = {
        username,
        password
      };

      login(userData);
    } else {
      showError('Please fill in the fields');
    }

    e.preventDefault();
  };

  const login = async userData => {
    const response = await fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();

    if (response.ok) {
      saveTokenToLocalStorage(data.token);
    } else {
      showError(data.message);
    }
  };

  const saveTokenToLocalStorage = token => {
    localStorage.setItem('token', token);
  };

  const showError = msg => {
    setErrorMessage(msg);
  };

  const removeError = () => {
    setErrorMessage('');
  };

  return (
    <main className={`${classes.main} ${classes.mainWithForm}`}>
      <form method="POST" onSubmit={checkIfInputsAreNotEmpty}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="Insert your username"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />

        {errorMessage ? <p>{errorMessage}</p> : null}

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}

export default SignIn;

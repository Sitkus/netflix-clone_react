import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './pages.style';
import { Button } from '../helpers';

function SignIn({ checkIfLoggedIn }) {
  const history = useHistory();
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

      checkIfLoggedIn();

      redirectToHome();
    } else {
      showError(data.message);
    }
  };

  const saveTokenToLocalStorage = token => {
    localStorage.setItem('token', token);
  };

  const redirectToHome = () => {
    history.push('/');
  };

  const showError = msg => {
    setErrorMessage(msg);
  };

  const removeError = () => {
    setErrorMessage('');
  };

  return (
    <main className={`${classes.main} ${classes.mainWithForm}`}>
      <form className={classes.form} method="POST" onSubmit={checkIfInputsAreNotEmpty}>
        <label className={classes.label} htmlFor="username">
          Username:
        </label>
        <input
          className={classes.input}
          onChange={e => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="Insert your username"
        />

        <label className={classes.label} htmlFor="password">
          Password:
        </label>
        <input
          className={classes.input}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />

        {errorMessage ? <p className={classes.error}>{errorMessage}</p> : null}

        <Button className={classes.formButton} type="submit">
          Sign In
        </Button>
      </form>
    </main>
  );
}

export default SignIn;

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './pages.style';
import { Button } from '../helpers';

function SignIn({ checkIfLoggedIn }) {
  const history = useHistory();
  const classes = useStyles();

  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  });

  const checkIfInputsAreNotEmpty = e => {
    const username = userDetails.username;
    const password = userDetails.password;

    removeError();

    if (username && password) {
      login();
    } else {
      showError('Please fill in the fields');
    }

    e.preventDefault();
  };

  const login = async () => {
    const response = await fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails)
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

  const saveInputData = e => {
    setUserDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
          onChange={e => saveInputData(e)}
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
          onChange={e => saveInputData(e)}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />

        {errorMessage && <p className={classes.error}>{errorMessage}</p>}

        <Button className={classes.formButton} type="submit">
          Sign In
        </Button>
      </form>
    </main>
  );
}

export default SignIn;

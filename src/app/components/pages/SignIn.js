import { useState } from 'react';
import { useDispatch } from 'react-redux';

import movies from '../../redux/movies';
import auth from '../../redux/auth';
import useStyles from './pages.style';
import { Button } from '../helpers';

function SignIn() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  });

  const checkInputsLength = (e) => {
    removeError();

    if (userDetails.username && userDetails.password) {
      login();
    } else {
      showError('Please fill in the fields');
    }

    e.preventDefault();
  };

  const login = async () => {
    try {
      const response = await fetch('https://academy-video-api.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });
      const data = await response.json();

      if (response.ok) {
        dispatch(auth.actions.login(data.token));
      } else {
        showError('Please check the login details');
      }
    } catch (err) {
      showError(err.message);
    } finally {
      dispatch(movies.actions.fetchMovies());
    }
  };

  const saveInputData = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showError = (msg) => {
    setErrorMessage(msg);
  };

  const removeError = () => {
    setErrorMessage('');
  };

  return (
    <main className={`${classes.main} ${classes.mainWithForm}`}>
      <form className={classes.form} method="POST" onSubmit={checkInputsLength}>
        <label className={classes.label} htmlFor="username">
          Username:
        </label>
        <input
          autoFocus
          className={classes.input}
          onChange={(e) => saveInputData(e)}
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
          onChange={(e) => saveInputData(e)}
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

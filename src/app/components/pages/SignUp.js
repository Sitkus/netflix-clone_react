import { useState } from 'react';
import useStyles from './pages.style';
import { Button } from '../helpers';

function SignUp() {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const showError = (msg) => {
    setErrorMessage(msg);
  };

  const removeError = () => {
    setErrorMessage('');
  };

  return (
    <main className={`${classes.main} ${classes.mainWithForm}`}>
      <form className={classes.form} method="POST" onSubmit={() => console.log('Submit')}>
        <label className={classes.label} htmlFor="email">
          Email
        </label>
        <input
          className={classes.input}
          onChange={(e) => console.log('InputChange')}
          type="email"
          name="email"
          id="email"
          placeholder="Insert your username"
        />

        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input
          className={classes.input}
          onChange={(e) => console.log('InputChange')}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />

        <label className={classes.label} htmlFor="repeat_password">
          Repeat password
        </label>
        <input
          className={classes.input}
          onChange={(e) => console.log('InputChange')}
          type="repeat_password"
          name="repeat_password"
          id="repeat_password"
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

export default SignUp;

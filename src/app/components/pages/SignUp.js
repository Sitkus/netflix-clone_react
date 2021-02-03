import useStyles from './pages.style';
import { Button } from '../helpers';

function SignUp() {
  const classes = useStyles();

  return (
    <main className={`${classes.main} ${classes.mainWithForm}`}>
      <form className={classes.form} method="POST" onSubmit={() => console.log('Submit')}>
        <label className={classes.label} htmlFor="username">
          Username:
        </label>
        <input
          className={classes.input}
          onChange={(e) => console.log('InputChange')}
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
          onChange={(e) => console.log('InputChange')}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />

        {/* {errorMessage && <p className={classes.error}>{errorMessage}</p>} */}

        <Button className={classes.formButton} type="submit">
          Sign In
        </Button>
      </form>
    </main>
  );
}

export default SignUp;

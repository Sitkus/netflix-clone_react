import { useHistory } from 'react-router-dom';
import useStyles from './layout.style';

function Hero() {
  let history = useHistory();
  const classes = useStyles();

  const redirectToRegisterPage = () => {
    history.push('/sign-up');
  };

  return (
    <article className={classes.hero}>
      <h1 className={classes.heroTitle}>Want more content?</h1>
      <button onClick={redirectToRegisterPage}>Get Access</button>
    </article>
  );
}

export default Hero;

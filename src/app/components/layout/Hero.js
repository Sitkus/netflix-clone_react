import { useHistory } from 'react-router-dom';
import useStyles from './Hero.style';

import { Button } from '../helpers';

function Hero() {
  let history = useHistory();
  const classes = useStyles();

  const redirectToRegisterPage = () => {
    history.push('/sign-up');
  };

  return (
    <article className={classes.hero}>
      <h1 className={classes.heroTitle}>Want more content?</h1>

      <Button onClick={redirectToRegisterPage}>Get Access</Button>
    </article>
  );
}

export default Hero;

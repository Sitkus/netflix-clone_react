import useStyles from './Hero.style';
import { LinkButton } from '../helpers';

function Hero() {
  const classes = useStyles();

  return (
    <article className={classes.hero}>
      <h1 className={classes.heroTitle}>Want more content?</h1>
      <LinkButton to="/sign-up">Get Access</LinkButton>
    </article>
  );
}

export default Hero;

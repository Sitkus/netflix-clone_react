import useStyles from './Movie.style';

import { Button } from '../helpers';

function Movie({ title, description, image }) {
  const classes = useStyles();

  return (
    <li className={classes.movie}>
      <img className={classes.movieImage} src={image} alt="text" />
      <article className={classes.movieContent}>
        <section className={classes.movieInsideTop}>
          <h2 className={classes.movieTitle}>{title}</h2>
          <p className={classes.movieDescription}>{description}</p>
        </section>

        <Button className={classes.favoriteButton}>Favorite</Button>
      </article>
    </li>
  );
}

export default Movie;

import useStyles from './MovieBox.style';
import { Button } from '../helpers';

function MovieBox({ title, description, image, favorite, toggleFavorite, clickOnMovie }) {
  const classes = useStyles();

  return (
    <li onClick={clickOnMovie} className={classes.movie}>
      <img className={classes.movieImage} src={image} alt="text" />
      <article className={classes.movieContent}>
        <section className={classes.movieInsideTop}>
          <h2 className={classes.movieTitle}>{title}</h2>
          <p className={classes.movieDescription}>{description}</p>
        </section>

        <Button
          onClick={toggleFavorite}
          className={`${classes.favoriteButton} ${favorite ? classes.remove : classes.favorite}`}
        >
          {favorite ? 'Remove' : 'Favorite'}
        </Button>
      </article>
    </li>
  );
}

export default MovieBox;

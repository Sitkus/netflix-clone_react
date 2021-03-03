import useStyles from './MovieBox.style';
import { Button } from '../helpers';
import { Link } from 'react-router-dom';

function MovieBox({ movie, toggleFavorite }) {
  const classes = useStyles();

  return (
    <li className={classes.movie}>
      <Link className={classes.movieLink} to={`/movie/${movie.id}`}>
        <img className={classes.movieImage} src={movie.image} alt="text" />
        <article className={classes.movieContent}>
          <section className={classes.movieInsideTop}>
            <h2 className={classes.movieTitle}>{movie.title}</h2>
            <p className={classes.movieDescription}>{movie.description}</p>
          </section>
        </article>
      </Link>

      <Button
        onClick={toggleFavorite}
        className={`${classes.favoriteButton} ${movie.favorite ? classes.remove : classes.favorite}`}
      >
        {movie.favorite ? 'Remove' : 'Favorite'}
      </Button>
    </li>
  );
}

export default MovieBox;

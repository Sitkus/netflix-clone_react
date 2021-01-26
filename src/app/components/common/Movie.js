import useStyles from './Movie.style';
import movieImage from '../../../assets/images/movie.png';

function Movie({ title, description }) {
  const classes = useStyles();

  return (
    <li className={classes.movie}>
      <img className={classes.movieImage} src={movieImage} alt="text" />
      <article className={classes.movieContent}>
        <section className={classes.movieDescription}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.aboutMovie}>{description}</p>
        </section>
        <button className={classes.favoriteButton}>Favorite</button>
      </article>
    </li>
  );
}

export default Movie;

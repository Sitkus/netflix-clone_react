import { useState, useEffect } from 'react';
import useStyles from './Home.style';

import { Hero } from '../layout';
import { Movie } from '../common';
import { Button } from '../helpers';

function Home() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState('https://academy-video-api.herokuapp.com/content/free-items');

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const fetchedMovies = await response.json();

      console.log(fetchedMovies);
      setMovies(fetchedMovies);
    }

    fetchMovies();
  }, []);

  return (
    <main className={classes.main}>
      <Hero />
      <ul className={classes.movies}>
        {movies ? (
          movies.map(movie => (
            <Movie key={movie.id} image={movie.image} title={movie.title} description={movie.description} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <Button className={classes.button}>Get More Content</Button>
    </main>
  );
}

export default Home;

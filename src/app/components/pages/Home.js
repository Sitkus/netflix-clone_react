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
      saveMoviesToLocalStorage(fetchedMovies);
    }

    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorageMovies) {
      setMovies(localStorageMovies);
    } else {
      fetchMovies();
    }
  }, []);

  const toggleFavorite = movieId => {
    const updatedMovies = movies.map(movie => {
      if (movieId === movie.id) {
        movie.favorite = !movie.favorite;
      }

      return movie;
    });

    setMovies(updatedMovies);
    saveMoviesToLocalStorage(updatedMovies);
  };

  const saveMoviesToLocalStorage = updatedMovies => {
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  return (
    <main className={classes.main}>
      <Hero />
      <ul className={classes.movies}>
        {movies ? (
          movies.map(movie => (
            <Movie
              favorite={movie.favorite || false}
              toggleFavorite={() => toggleFavorite(movie.id)}
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
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

import { useState, useEffect } from 'react';
import useStyles from './Home.style';

import { Hero } from '../layout';
import { Movie } from '../common';
import { Button } from '../helpers';

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Hero />
      <ul className={classes.movies}>
        <Movie
          title="Movie Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo eos"
        />
        <Movie title="Movie Title" description="Lorem ipsum" />
        <Movie
          title="Movie Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo eos"
        />
        <Movie
          title="Movie Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo eos"
        />
        <Movie title="Movie Title" description="Lorem ipsum" />
        <Movie
          title="Movie Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo eos"
        />
        <Movie
          title="Movie Title"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum illo eos"
        />
      </ul>
      <Button className={classes.button}>Get More Content</Button>
    </main>
  );
}

export default Home;

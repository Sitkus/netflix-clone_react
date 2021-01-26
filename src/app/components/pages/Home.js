import useStyles from './pages.style';

import { Hero } from '../layout';
import { Movie } from '../common';

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
    </main>
  );
}

export default Home;

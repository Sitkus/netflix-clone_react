import { useEffect } from 'react';
import useStyles from './WatchMovieModal.style';

function WatchMovieModal({ video, setModalIsOpen }) {
  const classes = useStyles();

  useEffect(() => {}, []);

  const closeWatchMovieModal = (e) => {
    if (e.target.src !== video) {
      setModalIsOpen(false);
    }
  };

  return (
    <div onClick={closeWatchMovieModal} className={classes.iframeContainer}>
      <iframe
        title="Movie youtube"
        className={classes.iframe}
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchMovieModal;

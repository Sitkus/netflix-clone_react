import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  movie: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 calc(100% / 3 - 100px)',
    margin: '20px 50px',
    backgroundColor: theme.palette.primary.light,
    height: 'auto'
  },
  movieImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover'
  },
  movieContent: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: '10px 20px'
  },
  movieTitle: {
    flex: '0 0 100%',
    marginBottom: '7px'
  },
  movieDescription: {
    marginBottom: '20px'
  },
  favoriteButton: {
    alignSelf: 'flex-end',
    padding: '5px 20px'
  },
  favorite: {
    //
  },
  remove: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`,
    background: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    }
  }
}));

export default useStyles;

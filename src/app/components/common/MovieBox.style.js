import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  movie: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0px',
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    '@media screen and (min-width: 600px)': {
      flex: '0 0 calc(100% / 2 - 40px / 2)',
      marginRight: '40px',
      '&:nth-child(2n)': {
        marginRight: 0,
      },
    },
    '@media screen and (min-width: 1200px)': {
      flex: '0 0 calc(100% / 3 - 80px / 3)',
      marginRight: '40px',
      '&:nth-child(2n)': {
        marginRight: '40px',
      },
      '&:nth-child(3n)': {
        marginRight: 0,
      },
    },
  },
  movieLink: {
    width: '100%',
    height: '100%',
  },
  movieImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  movieContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '10px 20px',
  },
  movieInsideTop: {
    flex: '0 0 100%',
  },
  movieTitle: {
    flex: '0 0 100%',
    marginBottom: '7px',
  },
  movieDescription: {
    marginBottom: '20px',
  },
  favoriteButton: {
    alignSelf: 'flex-start',
    padding: '5px 20px',
    margin: '0 0 10px 20px',
  },
  favorite: {
    //
  },
  remove: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`,
    background: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
    },
  },
}));

export default useStyles;

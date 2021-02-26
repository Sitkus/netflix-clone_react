import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: 'calc(100vh - 190px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    '@media screen and (min-width: 768px)': {
      minHeight: 'calc(100vh - 140px)'
    }
  },
  mainWithForm: {
    alignItems: 'center'
  },
  mainMovie: {
    display: 'block',
    '@media screen and (min-width: 1200px)': {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center'
    }
  },

  /**
   * Home
   */
  movies: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '40px'
  },
  button: {
    alignSelf: 'center',
    marginBottom: '50px'
  },

  /**
   * Form
   */
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#ccc',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    maxWidth: '400px',
    padding: '50px'
  },
  label: {
    flex: '0 0 100%',
    marginBottom: '3px'
  },
  input: {
    flex: '0 0 100%',
    marginBottom: '20px',
    padding: '10px 15px',
    outline: 'none',
    border: 'none',
    '&:focus': {
      boxShadow: `inset 0 0 0 2px green`
    }
  },
  error: {
    flex: '0 0 100%',
    marginBottom: '20px',
    color: theme.palette.secondary.main
  },

  /**
   * Movie
   */
  movieDoesntExist: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: 'calc(100vh - 190px)',
    width: '100%',
    '@media screen and (min-width: 768px)': {
      minHeight: 'calc(100vh - 140px)'
    }
  },
  movieImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    padding: '50px 50px 0',
    '@media screen and (min-width: 1200px)': {
      width: '40%',
      height: '100%',
      maxHeight: '700px',
      alignSelf: 'flex-start',
      padding: '50px'
    }
  },
  movieContent: {
    alignSelf: 'flex-start',
    padding: '50px'
  },
  movieTitle: {
    marginBottom: '5px'
  },
  movieDescription: {
    marginBottom: '15px'
  },
  movieButton: {
    marginRight: '15px'
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

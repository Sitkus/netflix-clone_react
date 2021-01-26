import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  movie: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 calc(100% / 3 - 100px)',
    margin: '20px 50px',
    backgroundColor: theme.palette.primary.light
    // height: '100%'
    // '&:nth-child(3n)': {
    //   marginRight: 0
    // }
  },
  movieImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
  movieContent: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    // flexDirection: 'column',
    // alignItems: 'space-between',
    justifyContent: 'space-between',
    padding: '10px 20px'
  },
  movieDescription: {
    flex: '1 1 100%',
    marginBottom: '20px'
  },
  title: {
    flex: '0 0 100%'
  },
  aboutMovie: {
    //
  },
  favoriteButton: {
    alignSelf: 'flex-end'
  }
}));

export default useStyles;

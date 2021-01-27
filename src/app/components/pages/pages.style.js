import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  },
  movies: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: '30px 0'
  },
  button: {
    alignSelf: 'center',
    marginBottom: '50px'
  }
}));

export default useStyles;

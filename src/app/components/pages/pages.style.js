import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  /**
   * Main
   */
  main: {
    minHeight: 'calc(100vh - 140px)'
  },
  movies: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    padding: '30px 0'
  }
}));

export default useStyles;

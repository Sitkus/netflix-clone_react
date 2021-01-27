import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    padding: '0 20px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  logoLink: {
    flex: '1',
    color: 'white'
  },
  logoImage: {
    color: 'white'
  },
  signInButton: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    borderRadius: '4px',
    padding: '5px 30px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  }
}));

export default useStyles;

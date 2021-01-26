import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  /**
   * Header
   */
  header: {
    color: 'white'
  },
  nav: {
    color: 'white'
  },
  logoLink: {
    color: 'white'
  },
  logoImage: {
    color: 'white'
  },
  signInButton: {
    color: 'white'
  },

  /**
   * Footer
   */
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    height: '70px',
    padding: '0 20px'
  },
  footerDescription: {
    flex: '0 0 70%'
  },
  cards: {
    display: 'flex'
  },
  card: {
    marginRight: '5px',
    '&:last-child': {
      marginRight: 0
    }
  },
  cardImage: {
    height: '30px',
    width: 'auto'
  }
}));

export default useStyles;

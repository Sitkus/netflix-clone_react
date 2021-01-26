import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  /**
   * Header
   */
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
  },

  /**
   * Hero
   */
  hero: {
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('https://i.pinimg.com/originals/12/16/8e/12168e11cf1dacadc00865fe19e8361b.jpg')",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '690px'
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 500,
    marginBottom: '30px'
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
  }
}));

export default useStyles;

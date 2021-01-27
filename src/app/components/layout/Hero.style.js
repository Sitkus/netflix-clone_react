import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url('https://i.pinimg.com/originals/12/16/8e/12168e11cf1dacadc00865fe19e8361b.jpg')",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '690px',
    width: '100%'
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 500,
    marginBottom: '30px'
  }
}));

export default useStyles;

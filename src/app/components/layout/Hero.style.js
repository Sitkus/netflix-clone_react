import { makeStyles } from '@material-ui/core/styles';
import heroImg from '../../../assets/images/hero.jpg';

const useStyles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('${heroImg}')`,
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

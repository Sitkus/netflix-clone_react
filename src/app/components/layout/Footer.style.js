import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    height: '120px',
    padding: '10px 20px',
    '@media screen and (min-width: 768px)': {
      justifyContent: 'space-between',
      textAlign: 'left',
      height: '70px',
      padding: '0 40px'
    }
  },
  footerDescription: {
    flex: '0 0 100%',
    '@media screen and (min-width: 768px)': {
      flex: '0 0 70%'
    }
  },
  cards: {
    display: 'flex'
  }
}));

export default useStyles;

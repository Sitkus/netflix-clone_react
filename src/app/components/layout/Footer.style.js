import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

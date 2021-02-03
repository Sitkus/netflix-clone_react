import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iframeContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    cursor: 'zoom-out'
  },
  iframe: {
    width: '70%',
    height: '70%',
    cursor: 'pointer',
    outline: `10px solid ${theme.palette.primary.light}`,
    backgroundCOlor: theme.palette.primary.main
  }
}));

export default useStyles;

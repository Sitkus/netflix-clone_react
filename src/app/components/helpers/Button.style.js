import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    borderRadius: '4px',
    padding: '10px 30px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: '150ms all ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: '150ms all ease-in-out'
    }
  }
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  cardImage: {
    height: '30px',
    width: 'auto',
  },
}));

export default useStyles;

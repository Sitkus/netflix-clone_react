import { Link } from 'react-router-dom';
import useStyles from './LinkButton.style';

function LinkButton({ children, className, to }) {
  const classes = useStyles();

  return (
    <Link to={to} className={`${classes.linkButton} ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;

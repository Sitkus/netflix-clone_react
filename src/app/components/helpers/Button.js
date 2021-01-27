import useStyles from './Button.style';

function Button({ children, className }) {
  const classes = useStyles();

  return <button className={`${classes.button} ${className}`}>{children}</button>;
}

export default Button;

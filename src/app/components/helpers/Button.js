import useStyles from './Button.style';

function Button({ children, className, onClick }) {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;

import useStyles from './Button.style';

function Button({ children, className, onClick, type = 'button' }) {
  const classes = useStyles();

  return (
    <button onClick={onClick} className={`${classes.button} ${className}`} type={type}>
      {children}
    </button>
  );
}

export default Button;

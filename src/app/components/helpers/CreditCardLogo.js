import useStyles from './CreditCardLogo.style';

function CreditCardLogo({ imageLink, imageAlt = 'Logo' }) {
  const classes = useStyles();

  return (
    <li className={classes.card}>
      <img className={classes.cardImage} src={imageLink} alt={imageAlt} />
    </li>
  );
}

export default CreditCardLogo;

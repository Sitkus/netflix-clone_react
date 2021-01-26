import creditCard from '../../../assets/creditcards/visa.svg';
import { CreditCardLogo } from '../helpers';
import useStyles from './layout.style';

function Header() {
  const classes = useStyles();
  const date = new Date();

  return (
    <footer className={classes.footer}>
      <p className={classes.footerDescription}>
        We care about your entertainment. Copyright © 2019 - {date.getFullYear()} netflix-clone.com
      </p>
      <ul className={classes.cards}>
        <CreditCardLogo imageLink={creditCard} imageAlt="Visa logo" />
        <CreditCardLogo imageLink={creditCard} imageAlt="Mastercard logo" />
        <CreditCardLogo imageLink={creditCard} imageAlt="Amex logo" />
        <CreditCardLogo imageLink={creditCard} imageAlt="Discover logo" />
      </ul>
    </footer>
  );
}

export default Header;

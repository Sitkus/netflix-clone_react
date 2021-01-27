import { CreditCardLogo } from '../helpers';
import useStyles from './Footer.style';

import visa from '../../../assets/creditcards/visa_card.svg';
import mastercard from '../../../assets/creditcards/master_card.svg';
import amex from '../../../assets/creditcards/amex_card.svg';
import discover from '../../../assets/creditcards/discover_card.svg';

function Header() {
  const classes = useStyles();
  const date = new Date();

  return (
    <footer className={classes.footer}>
      <p className={classes.footerDescription}>
        We care about your entertainment. Copyright © 2019 - {date.getFullYear()} netflix-clone.com
      </p>
      <ul className={classes.cards}>
        <CreditCardLogo imageLink={visa} imageAlt="Visa logo" />
        <CreditCardLogo imageLink={mastercard} imageAlt="Mastercard logo" />
        <CreditCardLogo imageLink={amex} imageAlt="Amex logo" />
        <CreditCardLogo imageLink={discover} imageAlt="Discover logo" />
      </ul>
    </footer>
  );
}

export default Header;

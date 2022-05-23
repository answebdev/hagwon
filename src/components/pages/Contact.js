import { Helmet } from 'react-helmet';
import classes from '../../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>ABC English | Contact</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>Contact Us</strong>
        </h2>
      </div>
    </div>
  );
};

export default Contact;

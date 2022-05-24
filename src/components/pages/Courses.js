import { Helmet } from 'react-helmet';
import classes from '../../styles/Contact.module.css';

const Courses = () => {
  return (
    <div>
      <Helmet>
        <title>ABC English | Courses</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>Courses Offered</strong>
        </h2>
      </div>
    </div>
  );
};

export default Courses;

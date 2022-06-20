import { Helmet } from 'react-helmet';
import classes from '../../styles/Instructors.module.css';

const Instructors = () => {
  return (
    <div>
      <Helmet>
        <title>ABC English | Instructors</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>Instructors</strong>
        </h2>
      </div>
    </div>
  );
};

export default Instructors;

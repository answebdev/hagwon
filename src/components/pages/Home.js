import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Map from '../layout/Map';
import Mapbox from '../layout/Mapbox';
import classes from '../../styles/Home.module.css';

// Eucalyptus County Park
const location = {
  address: 'ABC English, 9125 Edgewood Dr, La Mesa, CA 91941',
  lat: 32.7594958,
  lng: -117.0011385,
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ABC English</title>
      </Helmet>
      <div className={classes.Container}>
        <h2 className={classes.LeadTitle}>
          <strong>Welcome to ABC English</strong>
        </h2>
        <p>
          We are located in a peaceful nature-filled location in Spring Valley.
          Come learn and improve your English skills while enjoying the beauty
          and nature of Eucalyptus County Park.
        </p>

        <br />

        <h3>Address</h3>
        <p>9125 Edgewood Dr, La Mesa, CA 91941</p>

        <br />

        <h3>Contact</h3>
        <p>
          School: +1 (619) 123-4567
          <br />
          Bookings: +1 (619) 123-4568
          <br />
          <Link to='/contact'>Contact Us</Link>
        </p>

        <br />

        {/* <Map location={location} zoomLevel={17} /> */}
        <Mapbox />
      </div>
    </div>
  );
};

export default Home;

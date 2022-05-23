import React from 'react';
import Map from '../layout/Map';

// Eucalyptus County Park
const location = {
  address: '9125 Edgewood Dr, La Mesa, CA 91941.',
  lat: 32.7594958,
  lng: -117.0011385,
};

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Map location={location} zoomLevel={17} />
    </div>
  );
};

export default Home;

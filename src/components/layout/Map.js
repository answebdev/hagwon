import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import '../../styles/map.css';

// To use Google Maps professionally, you will have to enable the billing option:
// see video at 8:15: https://www.youtube.com/watch?v=OGTG1l7yin4

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={locationIcon} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => {
  return (
    <div className='map'>
      <h2 className='map-h2'>Come Visit Our School</h2>

      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAl0JT3pvUR2tvL6R49EEfMrCHKcQVWb1s' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;

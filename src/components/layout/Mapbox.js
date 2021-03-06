import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../styles/mapbox.css';

// Use Mapbox GL JS in a React app: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
// Install: https://www.npmjs.com/package/mapbox-gl

// See also: Getting Started With React Mapbox Gl JS: Markers => https://mounted.medium.com/getting-started-with-react-mapbox-gl-js-markers-f5cd8aabfc4e

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Mapbox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-117.0011385);
  const [lat, setLat] = useState(32.7594958);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
};

export default Mapbox;

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './GoogleMap.module.css';

const apiKey = process.env.REACT_APP_API_KEY; // Use the updated environment variable

const center = {
  lat: 36.535665486542605,
  lng: -87.35412665160283
};

const position = {
  lat: 36.535665486542605,
  lng: -87.35412665160283
};

const GoogleMapComponent = () => (
  <LoadScript
    googleMapsApiKey={apiKey}
  >
    <GoogleMap
      mapContainerClassName={styles.containerStyle}
      center={center}
      zoom={18}
    >
      <Marker position={position} />
    </GoogleMap>
  </LoadScript>
);

export default GoogleMapComponent;
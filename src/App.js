import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import SearchBar from './components/searchBar';

function App() {

  useEffect(() => {},[])

  const containerStyle = {
    width: '1450px',
    height: '690px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <div className="App">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
         <div>
          <SearchBar />
         </div>
        </GoogleMap>
      </LoadScript>
      {/* <Wrapper apiKey='AIzaSyCKOxKsD6kQTlxnbgeG2vdXIP-_NpFrqEw' render={render}>

      </Wrapper> */}
    </div>
  );
}

export default App;

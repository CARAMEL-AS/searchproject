import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = (props) => {

    const { places, centerPoint, onMarkerSelection } = props;
    const [mapSize, setMapSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const [zoom, setZoom] = useState(4.5)
    
    useEffect(() => {
      window.addEventListener('resize', () => {
        setMapSize({
          height: window.innerHeight,
          width: window.innerWidth
        })
      })
    },[])

    useEffect(() => {
        if(places.length > 0) {
            setZoom(12)
        } else {
            setZoom(4.5)
        }
    },[places])

    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
                <GoogleMap
                    mapContainerStyle={{height: mapSize.height, width: mapSize.width }}
                    center={centerPoint}
                    zoom={zoom}
                >
                {places.map((place, index) => {
                    return <Marker key={index} onClick={() => onMarkerSelection(place)} position={{ lat: place.lat, lng: place.lng }} />
                })}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GoogleMaps;
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = (props) => {

    const { places } = props;
    const [mapSize, setMapSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const [centerPoint, setCenterPoint] = useState({
        lat: 39.809734,
        lng: -98.555618
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

    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
                <GoogleMap
                    mapContainerStyle={{height: mapSize.height, width: mapSize.width }}
                    center={centerPoint}
                    zoom={zoom}
                >
                {places.map(place => {
                    console.warn('PLACE: ',place)
                    return <Marker position={{ lat: place.lat, lng: place.lng }} />
                })}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GoogleMaps;
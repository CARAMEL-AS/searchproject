import React, { useEffect, useState } from 'react';
import GoogleMaps from './components/GoogleMaps';
import SearchBar from './components/searchBar';
import { getPlaces, findCenter } from './helper/google'; 

function App() {

  const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState([]);
  const [centerPoint, setCenterPoint] = useState({
    lat: 39.809734,
    lng: -98.555618
  })

  const clearSearch = () => {
    setSearchItem('')
  }

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  const handleMarkerSelection = (data) => {
    console.log('Place Data: ',data);
  }

  useEffect(() => {
    if(searchItem.length > 0) {
      getPlaces(searchItem)
      .then(res => {
        setData(res);
        setCenterPoint(findCenter(res));
      })
    } else {
      setCenterPoint({
        lat: 39.809734,
        lng: -98.555618
      })
      setData([])
    }
  },[searchItem])

  return (
    <div className="App" style={{width: window.innerWidth, alignItems: 'center'}}>
      <GoogleMaps places={data} centerPoint={centerPoint} onMarkerSelection={handleMarkerSelection} />
      <SearchBar search={searchItem} handleSearch={handleSearch} clearSearch={clearSearch} />
    </div>
  );
}

export default App;

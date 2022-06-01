import React, { useEffect, useState } from 'react';
import GoogleMaps from './components/GoogleMaps';
import SearchBar from './components/searchBar';
import { getPlaces } from './helper/google'; 

function App() {

  const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState([]);

  const clearSearch = () => {
    setSearchItem('')
  }

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }

  useEffect(() => {
    if(searchItem.length > 0) {
      getPlaces(searchItem)
      .then(res => setData(res))
    }
  },[searchItem])

  return (
    <div className="App" style={{width: window.innerWidth, alignItems: 'center'}}>
      <GoogleMaps places={data} />
      <SearchBar search={searchItem} handleSearch={handleSearch} clearSearch={clearSearch} />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import GoogleMaps from './components/GoogleMaps';
import SearchBar from './components/searchBar';

function App() {

  useEffect(() => {},[])

  return (
    <div className="App" style={{width: window.innerWidth, alignItems: 'center'}}>
      <GoogleMaps />
      <SearchBar />
    </div>
  );
}

export default App;

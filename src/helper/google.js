export const getPlaces = async (searchQuery) => {
      return await fetch(`https://harmandeep-mand-portfolio.herokuapp.com/googlePlaces?query=${searchQuery}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => { return res.json()})
      .then(data => { return data })
      .catch(function (error) {
        console.log(error);
      });
}

export const getCoordinotes = (places) => {
    let coordinates = [];
    places.forEach(place => {
        coordinates.push({lat: place.lat, lng: place.lng})
    })
    return coordinates;
}

export const findCenter = (places) => {
    const coordinates = getCoordinotes(places);
    let lat = 0;
    let lng = 0;
    
    for(let i = 0; i < coordinates.length; ++i) {
        lat += coordinates[i].lat;
        lng += coordinates[i].lng;
    }

    lat /= coordinates.length;
    lng /= coordinates.length;

    return {lat: lat, lng: lng}
}
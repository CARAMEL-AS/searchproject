export const getPlaces = async (searchQuery) => {
      return await fetch(`https://harmandeep-mand-portfolio.herokuapp.com/googlePlaces?query=${searchQuery}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => { return res.json()})
      .then(data => { return data })
      .catch(function (error) {
        console.log(error);
      });
}

/**
 * address_components: null
aspects: []
cid: 0
city: null
country: null
events: []
formatted_address: "44050 Pipeline Plaza, Ashburn, VA 20147, United States"
formatted_phone_number: null
icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png"
id: null
international_phone_number: null
json_result_object: {business_status: 'OPERATIONAL', formatted_address: '44050 Pipeline Plaza, Ashburn, VA 20147, United States', geometry: {…}, icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png', icon_background_color: '#FF9E67', …}
lat: 39.0228248
lng: -77.47670769999999
name: "Starbucks"
nextpagetoken: null
opening_hours: {open_now: true}
permanently_closed: null
photos: [{…}]
place_id: "ChIJA70BQdE-tokRxGS3VoAFIiY"
postal_code: null
price_level: 2
rating: 4
reference: "ChIJA70BQdE-tokRxGS3VoAFIiY"
region: null
review_summary: null
reviews: []
street: null
street_number: null
types: (5) ['cafe', 'food', 'store', 'point_of_interest', 'establishment']
url: null
utc_offset: null
vicinity: null
viewport: {northeast: {…}, southwest: {…}}
website: null
zagat_reviewed: null
zagat_selected: null
 */

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
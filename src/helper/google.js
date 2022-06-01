var axios = require('axios');

export const getPlaces = (search) => {
      fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyBPfEJUboLcdpfL2u3I2ZPVkJ80gryE3xw`,{
          method: 'GET',
          headers: new Headers(),
          mode: 'cors'
      })
      .then(res => { return res.json()})
      .then(data => console.log('Data: ',data))
      .catch(function (error) {
        console.log(error);
      });
}
export const getPlaces = async (searchQuery) => {
      return await fetch(`https://harmandeep-mand-portfolio.herokuapp.com/googlePlaces?query=${searchQuery}&key=${process.env.REACT_APP_GOOGLE_API}`)
      .then(res => { return res.json()})
      .then(data => { return data })
      .catch(function (error) {
        console.log(error);
      });
}
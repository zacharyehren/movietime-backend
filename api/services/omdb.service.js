const axios = require('axios');
const ApiDetails = require('../apidetails')
const uri = "http://www.omdbapi.com/?apikey="
const key = ApiDetails.apiKey;

const getMovie = async () => {
  try {
    return await axios({
      method: 'get',
      url: uri + key,
      data: {
        s: "Jurassic Park"
      }
    }
    );
  } catch(error) {
    console.log(error);
  }
};

getMovie();
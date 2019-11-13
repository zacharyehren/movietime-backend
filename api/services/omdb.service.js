const axios = require('axios');
const ApiDetails = require('../apidetails')
const uri = "http://www.omdbapi.com/?apikey="
const key = ApiDetails.apiKey;

const getMovie = async (title, year = null) => {
  try {
    const payload = await axios({
      method: 'get',
      url: uri + key,
      params: {
        t: title,
        y: year
      }
    }
    );
    console.log(payload);
    return payload;
  } catch(error) {
    console.error(error);
  }
};

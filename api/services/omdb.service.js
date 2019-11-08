const axios = require('axios');
const ApiDetails = require('../apidetails')
const uri = "http://www.omdbapi.com/?"
const key = ApiDetails.apiKey;

const query = axios({
    method: 'get',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
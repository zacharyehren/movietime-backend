const omdbService = require('../services/omdb.service.js');

const searchForMovie = (request) => {
    omdbService.getMovie(request.params.searchQuery);
}

module.exports = {
    searchForMovie
}
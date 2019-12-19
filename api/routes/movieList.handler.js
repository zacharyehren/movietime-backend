const omdbService = require('../services/omdb.service.js');

const searchForMovie = async (request, response) => {
    const movies = await omdbService.getMovie(request.params.searchQuery);
    return response.json(movies.data);
}

module.exports = {
    searchForMovie
}
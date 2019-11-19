const omdbService = require(services/omdb.service.js);
const handler = require('./movieList.handler');

module.exports = app => {
    app.route('/movie/search/:searchQuery')
        .get(
            handler.getMovie
        )
}
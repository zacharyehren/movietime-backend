var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
MovieList = require('./api/models/movieListModel');
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const routes = require('./api/routes/movieList.endpoint');
routes(app);

app.listen(port);

console.log('movietime RESTful API server started on: ' + port);
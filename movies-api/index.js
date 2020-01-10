const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies')

const {
  logErrors,
  errorHandlers,
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//middlewere de bodyparse
app.use(express.json());

//routes
moviesApi(app);
userMoviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandlers);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});

/* app.listen(config.port, () => {
  const debug = require('debug')("app:error");
  debug(`Listening on http://localhost:${config.port}`);
}) */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-div-middleware plugin
// Use the webpack.config.js file as a base
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve up dem files on port 3000 boi
app.listen(3000, function () {
  console.log("The app is live, listening on port 3000!\n");
});
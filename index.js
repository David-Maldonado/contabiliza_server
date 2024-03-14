
const express = require('express');
const path = require('path');
let port = process.env.PORT || 3002;
// require('dotenv').config();
// App de express
const app = express();

//Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

// Mensajes de sockets
require('./sockets/socket');

// Path public
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(port, (err) => {
  if(err) {
   throw new Error(err);
  }
    console.log('Server started on port:', port );
});
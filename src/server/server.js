const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('new user');
  socket.on('sent message', (msg) => {
    console.log('got new message');
    io.emit('new message', msg);
  });
});

server.listen(8080);

const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(express.static('public'));
server.listen(8080);

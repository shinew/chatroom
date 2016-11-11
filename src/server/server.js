const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendStatus(500);
})
app.listen(3000);

require('dotenv/config');
const express = require('express');

const app = express();

const HOST = process.env.APP_URL;
const PORT = process.env.APP_PORT;

app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(3000);

console.log(`Running on ${HOST}:${PORT}`);

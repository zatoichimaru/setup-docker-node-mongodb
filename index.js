require('dotenv/config');
const express = require('express');
const MongoClient = require("mongodb").MongoClient;

const app = express();

const {
  APP_URL,
  APP_PORT,
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;


app.get('/', function (req, res) {
  res.send('Se inscreva no meu canal!!!');
});

MongoClient.connect(
  `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('MongoDB Connect!!!');
  })
  .catch(error => {
    console.log('MongoDB Fail!!!');
  });

app.listen(APP_PORT);

console.log(`Setup NoMoreBug [ON]: ${APP_URL}:${APP_PORT}`);


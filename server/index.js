require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






app.listen(port, () => {
  console.log(`Load Balancer is up and running on port ${port}`);
})
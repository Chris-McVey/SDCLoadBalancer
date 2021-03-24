require('newrelic');
const express = require('express');
// const bodyParser = require('body-parser');
const request = require('request');



const servers = ['http://ec2-18-219-66-39.us-east-2.compute.amazonaws.com:3000', 'http://ec2-18-217-240-208.us-east-2.compute.amazonaws.com:3000'];

let currentServer = 0;

const handler = (req, res) => {
  req.pipe(request({ url: servers[currentServer] + req.url })).pipe(res);
  currentServer = (currentServer + 1) % servers.length;
}

const app = express().get('*', handler).post('*', handler).put('*', handler);
const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));






app.listen(port, () => {
  console.log(`Load Balancer is up and running on port ${port}`);
})
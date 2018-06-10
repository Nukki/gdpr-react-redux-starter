const utils = require('./utils');
var express = require('express');
const axios =  require('axios');
var router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  let ip = req.clientIp;
  console.log("**************************** " + Date.now());
  console.log("IP is ", ip);
    // axios.get(`https://ipinfo.io/5.11.31.255/geo`)
  axios.get(`https://ipinfo.io/${ip}/geo`)
  .then(response => {
    let loc = response.data.loc;
    let isEU = utils.isEuropeanUnion(response.data.country);
    return { loc, isEU };
   })
   .then( locationData => {
     console.log(locationData);
     res.send(locationData);
   })
  .catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

// define the list route
router.get('/list', (req, res) => {
  res.send('here is a list');
});

module.exports = router

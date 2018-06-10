const utils = require('./utils');
const express = require('express');
const axios =  require('axios');
const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  let ip = req.clientIp;
  // console.log("**************************** " + Date.now());
  // console.log("IP is ", ip);
    // axios.get(`https://ipinfo.io/5.11.31.255/geo`)
  axios.get(`https://ipinfo.io/${ip}/geo`)
  .then(response => {
    if (response.status != 200) {
      // https://ipinfo.io/developers#authentication
      // could be triggered by rate limits
      console.log("IP INFO api error. Response status: ", response.status);
    }
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

module.exports = router

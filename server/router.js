const utils = require('./utils');
const express = require('express');
const axios =  require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  const ip = req.clientIp;
  axios.get(`https://ipinfo.io/${ip}/geo`)
  .then( response => {
    if (response.status != 200) {
      // https://ipinfo.io/developers#authentication
      // could be triggered by rate limits
      console.log("IP INFO api error. Response status: ", response.status);
    }
    const loc = response.data.loc;
    const isEU = utils.isEuropeanUnion(response.data.country);
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

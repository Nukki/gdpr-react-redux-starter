const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const requestIp = require('request-ip');

app.use(express.static('public'));
app.use(requestIp.mw());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/',function(req, res, next){
   console.log("A new request received at " + Date.now());
   let ip = req.clientIp;
   console.log("****************************");
   console.log("IP is ", ip);
   next();
});

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});




app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const requestIp = require('request-ip');
const router = require('./router');

app.use(express.static('public'))
   .use(requestIp.mw())
   .use(bodyParser.urlencoded({extended: true}))
   .use(bodyParser.json())
   .use('/api', router);

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

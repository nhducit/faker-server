var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();
var getFakePorts = require('./api/getVlanPorts');
var https = require('https');

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(3000);


app.use(cors());
var url = {
  getVlanPorts: '/api/vlanservice/management/getportinfo'
};


app.post(url.getVlanPorts, function (req, res) {
  //console.log(req);
  res.setHeader('Content-Type', 'application/json');
  //res.json(getFakePorts.fake());
  // response format {...}{...}
  res.send(JSON.stringify(getFakePorts.fake('first')) + JSON.stringify(getFakePorts.fake('second')));
});

//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});

const http = require('http');
const compression = require('compression')
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const log4js = require("log4js");
const env = require('dotenv').config({path:path.join(__dirname)+'/.env'});

require('events').EventEmitter.defaultMaxListeners = 100;

//////////// SERVERLAR //////////////////

//-------- HTTP -----
var app = express();
app.use(cors());

app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(3000, function () {
   console.log(" >>>> Port dinleniyor ::"+PORT);
  
});



///////////////////////////////////////
//////// API ROUTINGS /////////////////
///////////////////////////////////////


// ============= HTTP  =====================
app.get('/', function (request, response) { 
   response.send({ status: 200, message: "API V1.0" }); 
});
app.post('/', function (request, response) { 

   setTimeout(function(){
      response.send({ status: 200, message: "API V1.0" }); 
   }, 2000)
   
});
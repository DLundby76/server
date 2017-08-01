var http = require('http');

var PORTONE = 7000;
var PORTTWO = 7500;


function handleRequestOne(request, response)
{
  response.end("you're awesome-sauce");
  }

  function handleRequestTwo(request, response)
  {
    response.end("you suck monkey balls");
    }

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

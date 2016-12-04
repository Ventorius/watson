var express = require('express');
var app = express();

var watson = require('watson-developer-cloud');
var personality_insights = watson.personality_insights({
  username: '933b54d9-c109-4f57-b955-b0def96c701e',
  password: 'WpSoOItLEcay',
  version: 'v2'
});



app.get('/', function(req,res) {
  res.send('Hello');
});



app.listen(3000, function(){
  console.log('Server listening on 3000');
})

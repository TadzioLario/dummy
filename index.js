var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger()); 

app.get('/', function(request, response) {
var html = fs.readFileSync(htmlfile).toString();
response.send(html);
});


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

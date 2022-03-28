var express = require('express');
var app = express();

// This responds with "Hello World" on the homeage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/get_sensitive_data', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('SERVICE__SENSITIVE_DATA=come_from_secret1');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

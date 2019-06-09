var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is our first application');
});
var port = process.env.PORT || 2000;
var server = app.listen(port, function () {
    console.log("The application is running under port : " + port);
});
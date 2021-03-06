var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/Bootstrap'));

require ("./test/app.js")(app);

var port = process.env.PORT || 3001;

app.listen(port);
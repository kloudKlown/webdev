var express = require('express');
var app = express();



// app.get('/wat',rootRequest);
// function  rootRequest(req,res) {
//     res.send('WAAAAWWW');
// }

app.use(express.static(__dirname+'/public'));


app.listen(3000);
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // configure a public directory to host static content
// app.use(express.static(__dirname + '/public'));
//
// require ("./test/app.js")(app);
//
// var port = process.env.PORT || 3000;
//
// app.listen(port);
var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developmemnt';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
	res.render('index');
});

var port = 8888;
app.listen(port);
console.log('listening to port:' + port);
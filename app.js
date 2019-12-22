var express = require('express');
var todocontroller = require('./controllers/todocontroller');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

todocontroller(app);

app.listen(3000);
console.log('you are listening to post 3000');
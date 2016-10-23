var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/kernwaarden', function(req, res) {
    res.render('kernwaarden');
});

app.get('/over', function(req, res) {
    res.render('over');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/services', function(req, res) {
    res.render('services');
});

app.listen(5000, function(err) {
    console.log('Server is running on port 5000');
});

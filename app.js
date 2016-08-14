var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(5000, function(err) {
    console.log('Server is running on port 5000');
});

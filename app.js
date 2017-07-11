/* globals process __dirname*/

const express = require('express');
const app = express();

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// MAIN PAGE
app.get('/', function(req, res) {
    res.render('index');
});
// LIST ALL PAGE
app.get('/all', function(req, res) {
    res.render('all');
});
// LOGIN PAGE
app.get('/login', function(req, res) {
    res.render('login');
});
//REGISTER PAGE
app.get('/register', function(req, res) {
    res.render('register');
});


app.listen(port, () => {
    console.log(`App started on localhost:${port}`);
});


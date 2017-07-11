/* globals process __dirname*/

const express = require('express');
const app = express();

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// MAIN PAGE
app.get('/', function(req, res) {
    res.render('home/index');
});
// LIST ALL PAGE
app.get('/hotels', function(req, res) {
    res.render('hotels/all-hotels');
});
app.get('/hotels/:id', function(req, res) {
    res.render('hotels/hotel-details');
});
// LOGIN PAGE
app.get('/login', function(req, res) {
    res.render('user/login');
});
//REGISTER PAGE
app.get('/register', function(req, res) {
    res.render('user/register');
});


app.listen(port, () => {
    console.log(`App started on localhost:${port}`);
});


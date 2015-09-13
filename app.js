express = require('express');
app = express();
favicon = require('serve-favicon');
path = require('path');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))
app.use(function (req, res, next) {
    console.log('new request:', Date.now());
    next();
});

app.get('/', function (req, res) {
    res.send('hello world');
    console.log('new GET request on /');
})

app.listen(61111); //my port on uberspace is 61111

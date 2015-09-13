// Module dependencies
express = require('express');
favicon = require('serve-favicon');
path = require('path');
routes = require('./routes');

// express server
app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 61111);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//routing
app.get('/', routes.index);

app.listen(61111); //my port on uberspace is 61111

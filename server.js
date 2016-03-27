var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')

var app = express()
app.use(morgan('combined'))
app.use(serveStatic(__dirname + '/public'))

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

// To allow pasting of URL's
// See https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
// which recommends http://briantford.com/blog/angular-express
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/public' });
});

var server = app.listen(app.get('port'), url, function () {
  console.log('Static server listening url %s on port %s', url, server.address().port);
})
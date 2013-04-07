/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var fs = require('fs'),
	express = require('express'),
	http = require('http'),
	routes = require('./routes'),
	config = require('./config'),

	app = module.exports = express(),
	accessLogfile = fs.createWriteStream('logs/access.log', {flags: 'a'});

app.configure(function() {
	app.set('port', process.env.PORT || config.port);
	app.use(express.logger({stream: accessLogfile}));
	app.use(express.static(__dirname + '/html'));
	app.use(express.favicon());
	app.use(express.compress());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.cookieSession({
		secret: config.name,
		cookie: {
			path: '/',
			httpOnly: false,
			maxAge: 3600000 * 24 * 7
		}
	}));
	app.use(app.router);
});

routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('HTTP Server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var fs = require('fs'),
	config = require('../config'),
	errorLogfile = fs.createWriteStream('logs/error.log', {flags: 'a'});

exports.handler = function(err, req, res, status) {
	var meta = '[' + new Date() + '] ' + req.url + ' ' + status + '\n';
	if (config.debug) {
		console.log(meta + err.stack);
	}
	errorLogfile.write(meta + err.stack + '\n');
	
	res.status(status);
	res.end('');
};
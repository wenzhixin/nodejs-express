/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var User = require('../models/user'),
	loghelper = require('../helpers/loghelper');

exports.login = function(req, res) {
	try {
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.login(function(err, result) {
			if (err) {
				loghelper.handler(err, req, res, 500);
				return;
			}
			if (result) {
				req.session.user = result;
				res.status(200);
				res.end('');
			} else {
				delete req.session.user;
				res.status(401);
				res.end('');
			}
		});
	} catch(err) {
		loghelper.handler(err, req, res, 400);
	}
};

exports.logout = function(req, res) {
	res.header('Cache-Control', 'no-cache');
	delete req.session.user;
	res.status(200);
	res.end('');
};

exports.info = function(req, res) {
	res.header('Cache-Control', 'no-cache');
	res.json(req.session.user);
};
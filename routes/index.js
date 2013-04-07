/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var user = require('./user'),
	
	LOGIN_URL = '/login',
	LOGOUT_URL = '/logout',
	USER_URL = '/user';

module.exports = function(app) {
	app.post(LOGIN_URL, user.login);
	app.get(LOGOUT_URL, user.logout);
	app.get(USER_URL, checkLogin);
	app.get(USER_URL, user.info);
};

function checkLogin(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		res.status(401);
		res.end('');
	}
}
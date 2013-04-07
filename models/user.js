/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var sqlhelper = require('../helpers/sqlhelper');

function User() {
	this.username = '';
	this.password = '';
}

User.prototype = {
	
	construct: User,
	
	login: function(callback) {
		var sql = 'select id, username from users where username = ? and password = ?',
			params = [this.username, this.password];
		sqlhelper.query(sql, params, function(err, results) {
			if (err) {
				callback(err);
				return;
			}
			if (results.length) {
				callback(null, results[0]);
				return;
			}
			callback(null, null);
		});
	}
};

module.exports = User;
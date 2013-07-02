/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 */

var mysql = require('mysql'),
	config = require('../config');

exports.getFilter = function(options, keys, table, append) {
	var filters = [],
		sql = '',
		params = [];
	for (var key in options) {
		if (keys.indexOf(key) !== -1) {
			filters.push((table ? table + '.' : '') + key + '=?');
			params.push(options[key]);
		}
	}
	if (filters.length > 0) {
		sql = (append ? 'and ' : 'where ') + filters.join(' and ') + ' ';
	}
	return {
		sql: sql,
		params: params
	};
};

exports.query = function(sql, params, callback) {
	if (config.debug) {
		console.log('sql:', sql);
		console.log('params:', params);
	}
	var connection = mysql.createConnection(config.mysql);
	connection.connect();
	connection.query('use ' + config.mysql.database);
	connection.query(sql, params, callback);
	connection.end();
};

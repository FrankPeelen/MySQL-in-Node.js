'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password'
});

connection.query(
	'SELECT "foo" AS first_field, "bar" AS second_field',
	function (err, results, fields) {
		if (err) {
			console.log('A database error occured!');
		} else {
			console.log(results);
		}
		connection.end();
	}
);

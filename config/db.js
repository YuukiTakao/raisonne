var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'mysql',
	user     : 'yuuki',
	password : '0217yuki',
	database : 'raisonne'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

var express = require('express'),
	path    = require('path');

var Viewer = function (robots) {
	this.robots = robots;
	this.init();
};

Viewer.prototype.init = function () {
	var app = express(),
		robots = this.robots;

	app.use('/', express.static('viewer'));

	app.get('/data', function (req, res) {
		res.send(robots);
	});

	app.listen(2001, function () {
		console.log('Example app listening on port 2001!');
	});
};

module.exports = Viewer;
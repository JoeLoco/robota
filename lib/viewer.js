
var express = require('express');
var path = require("path")

var Viewer = function (robots) {	

	this.robots = robots;
	this.init();
};

Viewer.prototype.init = function()
{
	var app = express();
	var robots = this.robots;

	// Have a better way to response all static contents???

	app.get('/', function (req, res) {
  
  		res.sendfile(path.resolve('viewer/index.html'));

	});

	app.get('/js/robota.js', function (req, res) {
  
  		res.sendfile(path.resolve('viewer/js/robota.js'));

	});

	app.get('/js/phaser.min.js', function (req, res) {
  
  		res.sendfile(path.resolve('viewer/js/phaser.min.js'));

	});

	app.get('/js/jquery.min.js', function (req, res) {
  
  		res.sendfile(path.resolve('viewer/js/jquery.min.js'));

	});

	app.get('/img/robot.png', function (req, res) {
	  
	  res.sendfile(path.resolve('viewer/img/robot.png'));

	});

	app.get('/data', function (req, res) {
  
  		res.send(robots);

	});

	app.listen(2001, function () {
		console.log('Example app listening on port 2001!');
	});

}

module.exports = Viewer;

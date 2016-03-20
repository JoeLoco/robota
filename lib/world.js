var Creator = require('./creator.js'),
	Viewer  = require('./viewer.js');

var World = function () {
	this.robots = {};

	// Initialize the robots creator
	this.creator = new Creator('./robots', this.robots);
	
	// Initialize the Robota world viewer
	this.viewer = new Viewer(this.robots);

	//this.update();
	var _this = this;

	setInterval(function () {
		_this.update();
	}, 1000);
};

World.prototype.update = function () {
	var idx, robot;

	for (idx in this.robots) {
		robot = this.robots[idx];
		robot.onUpdate();
	}
};

module.exports = World;
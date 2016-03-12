var Robot = require('../lib/robot.js');

var SampleRobot = function (id) {

	Robot.call(this,id);
	this.name = "Sample Robot";
	
};
SampleRobot.prototype = Object.create(Robot.prototype);

SampleRobot.prototype.onUpdate = function() {

	// Overrride the update event
	
	this.moveUp();
	
	console.log(this);
	
};


module.exports = SampleRobot;
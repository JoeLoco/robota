var Robot = require('./robot.js');

var SampleRobot = function (id) {

	Robot.call(this,id);
	
};
SampleRobot.prototype = Object.create(Robot.prototype);

SampleRobot.prototype.onUpdate = function() {

	// Overrride the update event
	
	this.moveRandom();
	console.log('override onUpdate',this);
	
};


module.exports = SampleRobot;
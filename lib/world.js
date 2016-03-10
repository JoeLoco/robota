var Robot = require('./sample-robot.js');

var World = function () {
	
	this.robots = [];

	this.reload();

	//this.update();
	var _this = this;

	setInterval(function(){
		_this.update()
	},1000);

};

World.prototype.reload = function() {

	console.log('world.reload');

	this.robots.push(new Robot("Bob"));
	this.robots.push(new Robot("Charle"));

};

World.prototype.update = function() {

	console.log('world.update');

	for (var idx in this.robots) {
  		
  		var robot = this.robots[idx];
  		robot.onUpdate();  		
  	}
};

module.exports = World;
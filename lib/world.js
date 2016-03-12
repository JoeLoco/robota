var Creator = require('./creator.js');

var World = function () {
	
	this.robots = {};

	this.creator = new Creator('./robots',this.robots);	

	//this.update();
	var _this = this;

	setInterval(function(){
		_this.update()
	},1000);

};

World.prototype.update = function() {

	for (var idx in this.robots) {
  		
  		var robot = this.robots[idx];
  		robot.onUpdate();  		
  	}
};

module.exports = World;
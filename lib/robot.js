var Robot = function (id) {

	this.id = id;
	this.x = 400;
	this.y = 300;
	this.name = "nameless";
	this.speed = 10;

};

Robot.prototype.onUpdate = function() {
	//Need to be overrided 
};

Robot.prototype.moveUp = function() {
	this.y-=this.speed;
};

Robot.prototype.moveDown = function() {
	this.y+=this.speed;
};

Robot.prototype.moveLeft = function() {
	this.x-=this.speed;
};

Robot.prototype.moveRight = function() {
	this.x+=this.speed;
};

Robot.prototype.moveRandom = function() {
	
	var low = 0;
	var high = 4;

	var directions = [this.moveUp,this.moveDown,this.moveLeft,this.moveRight];
	var direction = Math.floor(Math.random() * (high - low) + low);

	var move = directions[direction];
	move.call(this);

};

module.exports = Robot;
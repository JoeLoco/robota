var Robot = function (id) {

	this.id = id;
	this.x = 0;
	this.y = 0;

};

Robot.prototype.onUpdate = function() {
	//Need to be overrided 
};

Robot.prototype.moveUp = function() {
	this.y--;
};

Robot.prototype.moveDown = function() {
	this.y++;
};

Robot.prototype.moveLeft = function() {
	this.x--;
};

Robot.prototype.moveRight = function() {
	this.x++;
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
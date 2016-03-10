var Robot = function (id) {

	this.id = id;
	this.x = 0;
	this.y = 0;

};

Robot.prototype.onUpdate = function() {

	console.log('onUpdate',this);	

};

Robot.prototype.moveUp = function() {
	console.log('moveUp');	
	this.y--;
};

Robot.prototype.moveDown = function() {
	console.log('moveDown');
	this.y++;
};

Robot.prototype.moveLeft = function() {
	console.log('moveLeft');
	this.x--;
};

Robot.prototype.moveRight = function() {
	console.log('moveRight');
	this.x++;
};

Robot.prototype.moveRandom = function() {
	
	var low = 0;
	var high = 4;

	var directions = [this.moveUp,this.moveDown,this.moveLeft,this.moveRight];
	var direction = Math.floor(Math.random() * (high - low) + low);

	var move = directions[direction];
	move();

};

module.exports = Robot;
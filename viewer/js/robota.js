var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var robots = [];
var server_data = [];

function preload() {

	game.load.image('robot', '/img/robot.png');

}

function create() {

	setInterval(function(){

		$.get('/data',function(data){

			server_data = data;			

		});	

	},1000);

}

function update() {

	for(var idx in server_data) 
	{
		var robot = server_data[idx];

		if(!robots[robot.id])
		{
			robots[robot.id] = game.add.sprite(robot.x,robot.y,'robot');
		}
		else
		{
			robots[robot.id].x = robot.x;
			robots[robot.id].y = robot.y;
		}
	}

}
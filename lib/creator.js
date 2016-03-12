var chokidar = require('chokidar');
var walk = require('walk');
var crypto = require("crypto");
var _path = require("path")
  
var Creator = function (path,robots) {

	this.watch(path,robots);

};

Creator.prototype.generateId = function (path)
{
	
	return crypto.createHash('md5').update(path).digest("hex");

}

Creator.prototype.watch = function(path,robots)
{
	_this = this;

	// Wacth for new robots and robots updates
	watcher = chokidar.watch(path, {persistent: true});

	watcher.on('add', function(path) {
		
		var Robot = require("../" + path);
		var id = _this.generateId(path);
    	robots[id] = new Robot(id);
	
		console.log('robot ', path, ' was created!');

	});

  	watcher.on('change', function(path) {
  		
  		delete require.cache[_path.resolve(path)];

  		var Robot = require("../" + path);
		var id = _this.generateId(path);
    	robots[id] = new Robot(id);
    	
  		console.log('robot', path, ' was changed!');

  	});

  	console.log('watching for robots!');
}

module.exports = Creator;







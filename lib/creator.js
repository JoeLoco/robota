var chokidar = require('chokidar'),
	walk     = require('walk'),
	crypto   = require('crypto'),
	_path    = require('path');

var Creator = function (path, robots) {
	this.watch(path, robots);
};

Creator.prototype.generateId = function (path) {
	return crypto.createHash('md5').update(path).digest('hex');
};

Creator.prototype.watch = function (path, robots) {
	var _this = this;

	// Wacth for new robots and robots updates
	var watcher = chokidar.watch(path, {persistent: true});

	watcher.on('add', function (path) {
		var Robot = require('../' + path),
			id = _this.generateId(path);

		robots[id] = new Robot(id);
		console.log('robot ', path, ' was created!');
	});

	watcher.on('change', function (path) {
		delete require.cache[_path.resolve(path)];

		var Robot = require('../' + path),
			id = _this.generateId(path);

		robots[id] = new Robot(id);
		console.log('robot', path, ' was changed!');
	});

	console.log('watching for robots!');
};

module.exports = Creator;
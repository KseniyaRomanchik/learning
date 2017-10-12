function Animal(name) {
	this.speed = 0;
	this.name = name;
}

Animal.prototype.run = function(speed) {
	this.speed += speed;
	console.log(this);
};

Animal.prototype.stop = function() {
	this.speed = 0;
	console.log(this.name);
};

function Rabbit(name) {
	this.interval = 0;
	this.name = name;
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function(interval) {
	this.interval += interval;
	Animal.prototype.run.apply(this, [interval]);
	// console.log(this);
};

var rabbit = new Rabbit('Bunny');
rabbit.jump(1);
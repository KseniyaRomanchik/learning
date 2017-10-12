function Rabbit(name) {
	this.name = name;
	this.speed = 0;
}
  
Rabbit.prototype.jump = function() {
	this.speed++;
	alert( this.name + ' прыгает' );
};

function Animal(name) {
	this.speed = 0;
	this.name = name;
}

Animal.prototype.run = function(speed) {
	this.speed += speed;
	console.log(this.name + this.speed);
};

Animal.prototype.stop = function() {
	this.speed = 0;
	console.log(this.name);
};

Rabbit.prototype = Object.create(Animal.prototype);

var animal = new Animal('Animal');
var rabbit = new Rabbit('Кроль');

rabbit.run(40)

console.log(rabbit)
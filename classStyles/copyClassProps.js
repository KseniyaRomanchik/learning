function Animal(name) {
	this.name = name;
	this.speed = 0;
}

function Rabbit(name) {
	Animal.apply(this, arguments);
}; 

var rabbit = new Rabbit('lolo');
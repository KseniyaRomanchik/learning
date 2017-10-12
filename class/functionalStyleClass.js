function Animal(name) {
	this.speed = 0;
	this.name = name;

	this.run = function(speed) {
		this.speed += speed;
		console.log(this.name + this.speed);
	};

	this.stop = function() {
		this.speed = 0;
		console.log(this.name);
	}
}

var animal = new Animal('Animal');
